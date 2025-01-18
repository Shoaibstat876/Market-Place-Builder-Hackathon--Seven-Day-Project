import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('product').title('Products'),
      ...S.documentTypeListItems().filter(
        (item) => !['category', 'product'].includes(item.getId() || '')
      ),
    ]);
