import "./AsidButtons.css";

import { Link, NavLink, Route } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";

function AsidButtons() {
  return (
    <div>
      <Row>logo</Row>
      <Row>Buttons</Row>

      <ButtonGroup className="ButtonGroup" vertical>
        <Button>
          <NavLink activeClassName="active" to="/backend/dashboard">
            Dashboard
          </NavLink>
        </Button>

        <Button>
          <NavLink activeClassName="active" to="/backend/tablelist">
            Table List
          </NavLink>
        </Button>

        <Button>
          <NavLink activeClassName="active" to="/backend/cardslist">
            Cards List
          </NavLink>
        </Button>

        <Button>
          <NavLink activeClassName="active" to="/backend/form">
            Add New Data
          </NavLink>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default AsidButtons;
