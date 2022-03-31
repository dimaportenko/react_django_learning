import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col, Row} from "react-bootstrap";
import Product from "../components/Product";
import {ProductType} from "../products";
import {useGetProductsQuery} from "../store/api/shopApi";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div>
      <h1>Latest Products</h1>
      {isLoading && (<Loader />)}
      {!!error && (<Message variant="danger">{(error as any)?.status}</Message>)}
      <Row>
        {data?.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
