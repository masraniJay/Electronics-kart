export const getCategorizedProducts = (products, { categories }) =>{
    const filteredProducts = [];
    if(categories.fridge === false && categories.printer === false && categories.phone === false && categories.ac === false && categories.pc === false)
    return products;

    if(categories.fridge) {
        let data = products.filter((product) => product.categoryName === "fridges");
        filteredProducts.push(...data);
    }

    if(categories.phone) {
        let data = products.filter((product) => product.categoryName === "phones");
        filteredProducts.push(...data);
    }

    if(categories.pc) {
        let data = products.filter((product) => product.categoryName === "PCs");
        filteredProducts.push(...data);
    }

    if(categories.ac) {
        let data = products.filter((product) => product.categoryName === "air conditioners");
        filteredProducts.push(...data);
    }

    if(categories.printer) {
        let data = products.filter((product) => product.categoryName === "printers");
        filteredProducts.push(...data);
    }

    return filteredProducts;
}