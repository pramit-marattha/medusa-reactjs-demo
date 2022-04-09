import axios from "axios";

import { Product } from "./interfaces";

export async function getProducts() {
  return await axios.get("http://localhost:9000/store/products");
}

export async function addProduct(product: Product) {
  return await axios.post("http://localhost:9000/store/products", product);
}

export async function updateProduct(product: Product, productID: number) {
  return await axios.put(
    `http://localhost:9000/store/products/${productID}`,
    product
  );
}

export async function removeproduct(productID: number) {
  return await axios.delete(
    `http://localhost:9000/store/products/${productID}`
  );
}
