// src/components/LandingPage.js

import React, { useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/ProductActions'; // Ensure correct import path

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products); // Assuming 'products' is the slice name and 'products' is the state in your Redux store
  const error = useSelector(state => state.products.error); // Optional: Handle error state

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the thunk action to fetch products
  }, [dispatch]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <Row gutter={16}>
        {products.map((product) => (
          <Col span={8} key={product.id}>
            <Card title={product.name}>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Button>Add to Cart</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LandingPage;
