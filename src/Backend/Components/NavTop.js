import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthContext from "../../Store/AuthContext";
import CartHeaderButton from "./Cart/CartHeaderButton";
import CartModal from "./Cart/CartModal";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { uiActions } from "../../Store/ui-slice";

// useDispatch
// uiActions

function NavTop() {
  const [CartModalShow, setCartModalShow] = useState(false);

  const dispatch = useDispatch();

  const AuthCTX = useContext(AuthContext);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const logoutHandler = () => {
    AuthCTX.onLogout();
  };

  console.log("setCartModalShow=>", CartModalShow);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Brand onClick={logoutHandler}>Logout</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link>
                <Link to="/"> backend </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/frontend"> frontend </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/login"> login </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            {/* <CartHeaderButton onClick={() => setCartModalShow(false)} /> */}
            <CartHeaderButton onClick={() => toggleCartHandler} />

            {CartModalShow && <CartModal />}
            <CartModal />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
