const initialState = {
  products: [],
  productById: {},
  liked: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        products: action.payload,
      };
    }
    case "FETCH_PRODUCT_BY_ID": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        productById: action.payload,
      };
    }
    case "FETCH_LIKED": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        liked: action.payload,
      };
    }
    default:
      return state;
  }
}
