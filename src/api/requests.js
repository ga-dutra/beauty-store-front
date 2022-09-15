import axios from "axios";

const url_base = "http://localhost:5000";

async function getProducts() {
  const promise = await axios.get(`${url_base}/products`, {});
  return promise;
}

async function postProducts() {
  const promise = await axios.post(`${url_base}/products`, {});
  return promise;
}

export { getProducts, postProducts };
