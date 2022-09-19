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

async function postItemInCart(token, productId) {
  const data = {
    headers: {
        Authorization: token,
        Product: productId
    }
  };
  const promise = await axios.post(`${url_base}/cart-list`, {}, data);
  return promise;
}

async function getCartList(token) {
  const data = {
    headers: {
        Authorization: token
    }
  };
  const promise = await axios.get(`${url_base}/cart-list`, data);
  return promise;
}


async function getUserWishList(config) {
  const promise = await axios.get(`${url_base}/wish-list`, {});
  return promise;
}

export { createUser, getProducts, postProducts, postLogin, getUserWishList, postItemInCart, getCartList };

