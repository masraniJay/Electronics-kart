export const getPricedProducts = (products, state) => {
    return products.filter((product) => product.discountedPrice <= state.price)
};