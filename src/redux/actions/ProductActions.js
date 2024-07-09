// src/redux/actions/productActions.js

import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products'); // Replace with your actual API endpoint
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error: error.message });
  }
};
