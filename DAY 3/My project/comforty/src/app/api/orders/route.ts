// pages/api/orders.ts
import { NextRequest, NextResponse } from 'next/server';

// Define the product type
interface Product {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the order type
interface Order {
  orderId: string;
  userId: string;
  products: Product[];
  totalPrice: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

// Temporary order storage (replace with database logic later)
const orders: Order[] = [];

// Get all orders (for admin or user)
export async function GET() {
  try {
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ message: 'Failed to fetch orders' }, { status: 500 });
  }
}

// Create a new order
export async function POST(request: NextRequest) {
  try {
    const { userId, products, totalPrice }: { userId: string; products: Product[]; totalPrice: number } = await request.json();

    // Validate the products array
    if (!Array.isArray(products) || products.length === 0) {
      return NextResponse.json({ message: 'Invalid products array' }, { status: 400 });
    }

    // Validate each product
    for (const product of products) {
      if (!product.productId || !product.name || product.price <= 0 || product.quantity <= 0) {
        return NextResponse.json({ message: 'Invalid product data' }, { status: 400 });
      }
    }

    // Validate the total price
    const calculatedTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    if (totalPrice !== calculatedTotal) {
      return NextResponse.json({ message: 'Total price mismatch' }, { status: 400 });
    }

    const newOrder: Order = {
      orderId: Date.now().toString(),
      userId,
      products,
      totalPrice,
      status: 'pending',
      createdAt: new Date(),
    };

    orders.push(newOrder);

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ message: 'Failed to create order' }, { status: 500 });
  }
}
