// src/redux/reducers/index.js

const initialState = {
  products: [],
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        error: null
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default productsReducer;
