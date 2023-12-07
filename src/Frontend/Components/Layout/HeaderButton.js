import "./HeaderButton.css";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const HeaderButton = (props) => {
  return (
    <Button className="HeaderButton">
      <span>
        <FontAwesomeIcon icon={faCartPlus} />
      </span>
      <span>22</span>
    </Button>
  );
};

export default HeaderButton;
