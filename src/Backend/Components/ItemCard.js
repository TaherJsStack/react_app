import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import ControlButtons from "./Buttons/ControlButtons";
import { Link } from "react-router-dom";
import { cartActions } from "../../Store/cart-slice";

function ItemCard(props) {
  const [title, setTitle] = useState(props.list.title || props.list.name);
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const { id, price, name } = props.list;

  const btnAction = () => {
    setTitle("Update.....");
  };

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name,
      })
    );

    console.log("cartTotalQuantity =>", cartTotalQuantity);
  };

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format"
          src={props.list.image}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/backend/cardslist/${props.list.id}`}>{title}</Link>
            <br />
            price: <strong> {props.list.price} </strong>
            <br />
            quantity: <strong> {props.list.quantity} </strong>
            <br />
            isActive: <strong> {props.list.isActive.toString()} </strong>
          </Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <Card.Body>
          <Card.Link>
            <button onClick={btnAction}>action 3</button>
            <button onClick={addItemToCartHandler}>Add Item</button>
          </Card.Link>
          <Card.Link>
            <ControlButtons path="trtrtrtrtrrtrrtrttrtrttrtr" />
          </Card.Link>
        </Card.Body>
      </Card>
      <br /> <br />
      <br />
    </>
  );
}

export default ItemCard;
