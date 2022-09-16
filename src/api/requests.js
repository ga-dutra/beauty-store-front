import axios from "axios";

const url_base = "http://localhost:5000";

function createUser(body) {
  const promise = axios.post(`${url_base}/sign-up`, body);
  return promise;
}

async function getProducts() {
  const promise = await axios.get(`${url_base}/products`, {});
  return promise;
}

async function postProducts() {
  const promise = await axios.post(`${url_base}/products`, {});
  return promise;
}

export { createUser, getProducts, postProducts };
