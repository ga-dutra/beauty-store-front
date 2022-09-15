function priceFilter(productsList, filterType) {
  if (filterType === "") {
    return productsList;
  } else if (filterType === "ascending") {
    productsList = productsList.sort(
      (a, b) =>
        Number(a.price.replace(",", ".")) - Number(b.price.replace(",", "."))
    );
  } else if (filterType === "descending") {
    productsList = productsList.sort(
      (a, b) =>
        Number(b.price.replace(",", ".")) - Number(a.price.replace(",", "."))
    );
  }
  return productsList;
}

export { priceFilter };
