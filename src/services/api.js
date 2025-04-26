const API_BASE_URL = "https://fakestoreapi.com";

/**
 * Function to get all products from the API.
 * @returns {Promise<Array>} - A promise that resolves to an array of products.
 * @throws {Error} - If the API request fails.
 */
export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data;
};

/**
 * Function to get a product by its ID.
 * @param {number} id - The ID of the product to get.
 * @returns {Promise<Object>} - A promise that resolves to a product object.
 * @throws {Error} - If the API request fails.
 */
export const getProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID ${id}`);
  }
  const data = await response.json();
  return data;
};
