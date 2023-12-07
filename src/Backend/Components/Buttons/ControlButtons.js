import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ControlButtons = (props) => {
  // console.log(' ControlButtons =>', props)

  return (
    <>
      <Row>
        <Col xs={3}>
          <Button> Edit </Button>
        </Col>

        <Col xs={3}>
          <Button> Delete </Button>
        </Col>

        <Col xs={3}>
          <Button> More </Button>
        </Col>
      </Row>
    </>
  );
};

export default ControlButtons;
