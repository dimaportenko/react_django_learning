import React, {useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import {Button, Card, Col, Form, FormControl, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Rating from "../components/Rating";
import {useGetProductQuery} from "../store/api/shopApi";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const {id} = useParams();
  const navigate = useNavigate();
  const {data, error, isLoading} = useGetProductQuery(id!);
  const product = data;

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }

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

                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qty</Col>
                      <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={
                            (e) => setQty(Number(e.target.value))
                          }
                        >
                          {Array.from(Array(10).keys()).map(val => {
                            return (
                              <option value={val + 1} key={val}>{val + 1}</option>
                            )
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}

                <ListGroupItem>
                  <Button className="btn btn-wide" disabled={product.countInStock < 1} type="button"
                          onClick={addToCartHandler}>Add to
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
