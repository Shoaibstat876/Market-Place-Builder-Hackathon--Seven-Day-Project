import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '../../../sanity/lib/client';

const PAGE_SIZE = 10;

const ALLOWED_SORT_FIELDS = ['title', 'price', 'createdAt'];

interface Pagination {
  page: number;
  limit: number;
}

const validatePaginationParams = (page: string | null, limit: string | null): Pagination => {
  const pageNumber = parseInt(page || '1');
  const limitNumber = parseInt(limit || `${PAGE_SIZE}`);

  if (isNaN(pageNumber) || pageNumber <= 0) {
    throw new Error('Invalid page number');
  }

  if (isNaN(limitNumber) || limitNumber <= 0) {
    throw new Error('Invalid limit value');
  }

  return { page: pageNumber, limit: limitNumber };
};

const sanitizeSortField = (sort: string | null): string => {
  if (sort && ALLOWED_SORT_FIELDS.includes(sort)) {
    return sort;
  } else if (sort) {
    console.warn(`Invalid sort field: ${sort}. Defaulting to 'createdAt'.`);
  }
  return 'createdAt';
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = url.searchParams.get('page');
  const limit = url.searchParams.get('limit');
  const category = url.searchParams.get('category');
  const sort = url.searchParams.get('sort');

  try {
    const { page: pageNumber, limit: limitNumber } = validatePaginationParams(page, limit);

    const skip = (pageNumber - 1) * limitNumber;

    let query = '*[_type == "product"]';

    if (category) {
      query += ` && category._ref == "${category}"`;
    }

    const sanitizedSort = sanitizeSortField(sort);
    query += ` | order(${sanitizedSort})`;

    const products = await sanityClient.fetch(query + `[${skip}...${skip + limitNumber}]`);

    // Optimize count query
    const countQuery = `count(*[_type == "product" ${category ? `&& category._ref == "${category}"` : ''}])`;
    const totalCount = await sanityClient.fetch(countQuery);

    return NextResponse.json({
      products,
      pagination: {
        totalCount,
        totalPages: Math.ceil(totalCount / limitNumber),
        currentPage: pageNumber,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching products:', error);
      return NextResponse.json({ error: 'Failed to fetch products', message: error.message }, { status: 500 });
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json({ error: 'Failed to fetch products', message: 'Unknown error' }, { status: 500 });
    }
  }
}
