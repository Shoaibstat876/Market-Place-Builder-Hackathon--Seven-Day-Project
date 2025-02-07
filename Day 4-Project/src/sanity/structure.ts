import type { StructureResolver } from "sanity/structure";

// Sanity Structure Configuration
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Store Management Group
      S.listItem()
        .title("Store Management")
        .child(
          S.list()
            .title("Manage Store")
            .items([
              // Products Section
              S.documentTypeListItem("products")
                .title("Products")
                .child(
                  S.documentList()
                    .title("Products List")
                    .filter('_type == "products"')
                    .defaultOrdering([{ field: "title", direction: "asc" }])
                ),

              // Categories Section
              S.documentTypeListItem("categories")
                .title("Categories")
                .child(
                  S.documentList()
                    .title("Categories List")
                    .filter('_type == "categories"')
                    .defaultOrdering([{ field: "title", direction: "asc" }])
                ),
            ])
        ),

      // Default: Show all other document types
      ...S.documentTypeListItems(),
    ]);
