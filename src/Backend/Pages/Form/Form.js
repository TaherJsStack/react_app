import "./Form.css";

import Col from "react-bootstrap/Row";
import Container from "react-bootstrap/Row";
import DataForm from "../../Components/DataForm/DataForm";
import Row from "react-bootstrap/Row";

const Form = () => {
  const dataFormHanler = (dataForm) => {
    const data = {
      ...dataForm,
    };
    console.log("dataFormHanler  =>", data);
  };

  return (
    <>
      <h1>Form</h1>

      <Container className="Container dddd" fluid>
        <Col lg={4} md={8} sm={8}>
          <DataForm onSaveDataForm={dataFormHanler} />
        </Col>
      </Container>
    </>
  );
};

export default Form;
