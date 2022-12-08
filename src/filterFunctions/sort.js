export const getSortedProducts = (products, state) => {
  if (state.sortBy === "HIGH_TO_LOW") {
    return products.sort(
      (product1, product2) =>
        product2.discountedPrice - product1.discountedPrice
    );
  } else if (state.sortBy === "LOW_TO_HIGH") {
    return products.sort(
      (product1, product2) =>
        product1.discountedPrice - product2.discountedPrice
    );
  } else {
    return products;
  }
};
