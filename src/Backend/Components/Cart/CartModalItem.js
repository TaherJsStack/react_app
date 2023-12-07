// import "./CartModal.css";

import { Badge, Button, Col, Container, Modal, Row } from "react-bootstrap";
import React, { Fragment, useContext } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import { cartActions } from "../../../Store/cart-slice";
import { useDispatch } from "react-redux";

const CartModalItem = (props) => {
  const dispatch = useDispatch();

  console.log("props =>", props.item);

  const plusItemHandelar = () => {
    dispatch(cartActions.addItemToCart(props.item.itemId));
  };

  const minusItemHandelar = () => {
    dispatch(cartActions.removeItemFromCart(props.item.itemId));
  };

  return (
    <Fragment>
      <Container>
        <Row className="product">
          <Col xs={12} md={9} className="product-info">
            <span className="image">
              <Image
                width={50}
                height={50}
                roundedCircle
                src="https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format"
              />
            </span>
            <span className="text">
              <p>{props.item.name}</p>
              <strong>price: ${props.item.price} </strong>
              <strong>totalPrice: ${props.item.totalPrice} </strong>
            </span>
          </Col>
          <Col xs={6} md={3}>
            <div className="price-state">
              <Button size="sm" variant="danger" onClick={minusItemHandelar}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <span>
                <Badge bg="success">{props.item.quantity}</Badge>
              </span>

              <Button size="sm" variant="info" onClick={plusItemHandelar}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CartModalItem;
