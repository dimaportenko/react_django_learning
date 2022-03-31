import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import {useGetProductQuery} from "../store/api/shopApi";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = () => {
  const {id} = useParams();
  const {data, error, isLoading} = useGetProductQuery(id!);
  const product = data;

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      {isLoading && (<Loader/>)}
      {!!error && (<Message variant="danger">{(error as any)?.status}</Message>)}

      {!!product && (
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
                Price: ${data.price}
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
                  <Button className="btn btn-wide" disabled={product.countInStock < 1} type="button">Add to
                    Cart</Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
