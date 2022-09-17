import axios from "axios";

const url_base = "https://beauty-store-back.herokuapp.com";

function createUser(body) {
  const promise = axios.post(`${url_base}/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${url_base}/login`, body);
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

export { createUser, getProducts, postProducts, postLogin };
