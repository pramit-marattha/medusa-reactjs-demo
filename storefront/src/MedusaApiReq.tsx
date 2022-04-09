import axios from "axios";

export async function getProducts() {
  return await axios.get("http://localhost:9000/store/products");
}
