import React from 'react';
import products from "../products";
import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const {id} = useParams();
  const product = products.find(item => item._id === id)
  if (!product) {
    return null;
  }
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product?.name} fluid/>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product?.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <Rating value={product?.rating ?? 0} text={`${product?.numReviews} reviews`} color={'#f8e825'}/>
            </ListGroupItem>

            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>

            <ListGroupItem>
              Description: {product.description}
            </ListGroupItem>

          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button className="btn btn-wide" disabled={product.countInStock < 1} type="button">Add to Cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
