export const getRatedProducts = (products, state) => {
    return products.filter((product) => product.rating >= state.rating)
};