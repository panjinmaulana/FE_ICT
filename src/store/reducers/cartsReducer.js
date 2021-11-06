const initialState = {
  carts: [],
  productById: {},
  liked: [],
};

export default function cartsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CARTS": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        carts: action.payload,
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
