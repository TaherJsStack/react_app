import "./CartModal.css";

import { Badge, Button, Col, Container, Modal, Row } from "react-bootstrap";
import React, { Fragment, useContext } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../../../Store/CartContext";
import CartModalItem from "./CartModalItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";

const CartModal = (props) => {
  const cartCTX = useContext(CartContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="cart-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>

          <Container>
            {cartItems.map((item) => {
              return <CartModalItem key={item.itemId} item={item} />;
            })}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col xs={12} md={9}>
              Total: {cartCTX.totalAmount}
            </Col>
            <Col xs={6} md={3}>
              <div className="price-state">
                <Button onClick={props.onHide} variant="outline-primary">
                  Close
                </Button>
                <Button onClick={props.onHide} variant="success">
                  Order
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CartModal;
