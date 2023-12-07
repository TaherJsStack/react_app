import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";

const FrontHeader = (props) => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
          <Nav className="me-auto">
            <Nav.Link href="#link">
              <HeaderButton></HeaderButton>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default FrontHeader;
