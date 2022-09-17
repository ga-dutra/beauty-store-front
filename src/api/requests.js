import axios from "axios";

const url_base = " https://beauty-store-back.herokuapp.com";

async function getProducts() {
  const promise = await axios.get(`${url_base}/products`, {});
  return promise;
}

async function postProducts() {
  const promise = await axios.post(`${url_base}/products`, {});
  return promise;
}

export { getProducts, postProducts };
