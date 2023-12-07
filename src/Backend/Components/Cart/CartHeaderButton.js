import "./CartHeaderButton.css";

import { Button, Modal } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartContext from "../../../Store/CartContext";
import CartModal from "./CartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartHeaderButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const cartCTX = useContext(CartContext);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartLength = cartCTX.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <>
      <Button className="CartHeaderButton" onClick={() => setModalShow(true)}>
        <span>
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        <span>{cartTotalQuantity}</span>
      </Button>

      <CartModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartHeaderButton;
