import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import {ProductType} from "../products";

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get<ProductType[]>('/products');
      if (result.data) {
        setProducts(result.data);
      }
    }
    getProducts();
  }, [])

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
