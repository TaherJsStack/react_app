import "./DataForm.css";

import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputValidationAlert from "../Errors/InputValidationAlert";
import { useHistory } from "react-router-dom";

const DataForm = (props) => {
  const [imageUrl, setImageUrl] = useState();

  const history = useHistory();
  const [isFormFoucused, setIsFormFoucused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [validMessage, setValidMessage] = useState();

  const [inputsValuse, setInputsValuse] = useState({
    name: "",
    price: 0,
    color: "",
    selector: "",
    isActive: false,
    description: "",
    image: "",
  });

  const handleNameChange = (event) => {
    console.log("event.target.value =>", event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      name: event.target.value,
    });
  };

  const handlePriceChange = (event) => {
    console.log("event.target.value =>", event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      price: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    console.log("event.target.value =>", event.target.value);

    if (event.target.files[0]) {
      console.log("picture: ", event.target.files);
      // setPicture(e.target.files[0]); to upload to server
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // setImgData(reader.result);
        setImageUrl(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }

    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      image: event.target.value,
    });
  };

  const handleDescChange = (event) => {
    console.log("event.target.value =>", event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      description: event.target.value,
    });
  };

  const handleColorChange = (event) => {
    console.log("event.target.value =>", event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      color: event.target.value,
    });
  };

  const handleSelectorChange = (event) => {
    console.log("event.target.value =>", event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      selector: event.target.value,
    });
  };

  const handleIsActiveChange = (event) => {
    console.log("event.target.value =>", event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputsValuse({
      ...inputsValuse,
      isActive: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("event.target.value =>", event.target.value);
    event.preventDefault();

    if (
      inputsValuse.name.trim().length === 0 ||
      // inputsValuse.price.trim().length === 0 ||
      inputsValuse.selector.trim().length === 0 ||
      inputsValuse.image.trim().length === 0 ||
      inputsValuse.description.trim().length === 0
    ) {
      if (inputsValuse.name.trim().length === 0) {
        setValidMessage("Name Can't Be Empty");
      } else if (inputsValuse.price.trim().length === 0) {
        setValidMessage("price Can't Be Empty");
      } else if (inputsValuse.selector.trim().length === 0) {
        setValidMessage("selector Can't Be Empty");
      } else if (inputsValuse.image.trim().length === 0) {
        setValidMessage("image Can't Be Empty");
      } else if (inputsValuse.description.trim().length === 0) {
        setValidMessage("Description Can't Be Empty");
      }

      setIsValid(false);
      return;
    }

    const formData = {
      id: Math.random().toString(),
      name: inputsValuse.name,
      price: inputsValuse.price,
      color: inputsValuse.color,
      selector: inputsValuse.selector,
      isActive: inputsValuse.isActive,
      description: inputsValuse.description,
      image: inputsValuse.image,
    };
    props.onSaveDataForm(formData);
    resetForm();
    // history.goBack();
    // history.push('')
  };

  const resetForm = () => {
    document.getElementById("data-form").reset();
    setInputsValuse({
      name: "",
      price: 0,
      color: "",
      selector: "",
      isActive: false,
      description: "",
      image: "",
    });
  };

  const onFormFocusHandler = () => {
    setIsFormFoucused(true);
  };

  return (
    <div>
      <img src={imageUrl} />

      {!isValid && <InputValidationAlert message={validMessage} />}
      <Form
        onFocus={onFormFocusHandler}
        onSubmit={handleSubmit}
        className={`class form ${!isValid ? "invalid" : ""}`}
        id="data-form"
      >
        {/* ========================================> name <======================================= */}
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control
            type="text"
            placeholder="Name..."
            onChange={handleNameChange}
          />
        </Form.Group>

        {/* ========================================> price <======================================= */}
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Control
            type="number"
            placeholder="Price...."
            onChange={handlePriceChange}
          />
        </Form.Group>

        {/* =======================================> selector <====================================== */}
        <Form.Group className="mb-3" controlId="exampleForm.select">
          <Form.Select
            aria-label="Default select example"
            onChange={handleSelectorChange}
          >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        {/* ========================================> textarea <======================================= */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Example textarea"
            onChange={handleDescChange}
          />
        </Form.Group>

        {/* ========================================> file <======================================= */}
        <Form.Group controlId="formFileSm" className="mb-3">
          {/* <Form.Label>Small file input example</Form.Label> */}
          <Form.Control
            type="file"
            size="sm"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        {/* ========================================> Color <======================================= */}
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          title="Choose your color"
          onChange={handleColorChange}
        />

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={handleIsActiveChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DataForm;
