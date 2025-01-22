export const fetchProducts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(
      `https://hackathon-apis.vercel.app/api/products?page=${page}&limit=${limit}`
    );
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
