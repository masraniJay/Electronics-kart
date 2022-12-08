const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return {
        ...state,
        sortBy: action.type,
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        sortBy: action.type,
      };

    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };

    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };

    case "FRIDGES":
      return {
        ...state,
        categories: {
          ...state.categories,
          fridge: !state.categories.fridge,
        },
      };

    case "PHONES":
      return {
        ...state,
        categories: {
          ...state.categories,
          phone: !state.categories.phone,
        },
      };

    case "AIR CONDITIONERS":
      return {
        ...state,
        categories: {
          ...state.categories,
          ac: !state.categories.ac,
        },
      };

    case "PCS":
      return {
        ...state,
        categories: {
          ...state.categories,
          pc: !state.categories.pc,
        },
      };

    case "PRINTERS":
      return {
        ...state,
        categories: {
          ...state.categories,
          printer: !state.categories.printer,
        },
      };

    case "CLEAR" :
        return {
            ...state,
            sortBy: "",
            rating: 1,
            price: 500000,
            categories: {
            fridge: false,
            phone: false,
            ac: false,
            pc: false,
            printer: false
        }
        }  

    default:
      break;
  }
};

export { filterReducer };
