import "./Login.css";

import { Button, Container, Form } from "react-bootstrap";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import AuthContext from "../Store/AuthContext";
import InputValidationAlert from "../Backend/Components/Errors/InputValidationAlert";

// rfce

const USER_INPUT_EMAIL = "USER_INPUT_EMAIL";
const INPUT_BLUR_EMAIL = "INPUT_BLUR_EMAIL";

const USER_INPUT_PASSWORD = "USER_INPUT_PASSWORD";
const INPUT_BLUR_PASSWORD = "INPUT_BLUR_PASSWORD";

const emailReducer = (state, action) => {
  // console.log('emailReducer state =>', state)
  // console.log('action =>', action)
  if (action.type === USER_INPUT_EMAIL) {
    return { value: action.val, isvalid: action.val.includes("@") };
  }
  if (action.type === INPUT_BLUR_EMAIL) {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
  return { value: "", isvalid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === USER_INPUT_PASSWORD) {
    return {
      value: action.val,
      isvalid: action.val.trim().length > 5,
    };
  }
  if (action.type === INPUT_BLUR_PASSWORD) {
    return {
      value: state.value,
      isvalid: state.value.trim().length > 5,
    };
  }
  return { value: "", isvalid: false };
};

const Login = () => {
  const AuthCTX = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsSubmted, setFormIsSubmited] = useState(false);
  // const [isLogedIn, setLogedIn] = useState(false);
  const [validMessage, setValidMessage] = useState();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailState, dispatch] = useReducer(emailReducer, {
    value: "",
    isvalid: false,
  });

  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isvalid: emailIsValid } = emailState;
  const { isvalid: passIsvalid } = passwordState;

  useEffect(() => {
    const identifire = setTimeout(() => {
      const user = localStorage.getItem("user");
      setFormIsValid(emailState.isvalid && passwordState.isvalid);
    }, 500);

    return () => {
      clearTimeout(identifire);
    };
  }, [emailState.isvalid, passwordState.isvalid]);

  const emailChangeHandler = (event) => {
    dispatch({ type: USER_INPUT_EMAIL, val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: USER_INPUT_PASSWORD, val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatch({ type: INPUT_BLUR_EMAIL });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: INPUT_BLUR_PASSWORD });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsSubmited(true);
    if (formIsValid) {
      return AuthCTX.onLogin(emailState.value, passwordState.value);
    } else {
      setMessageError();
    }
  };

  const setMessageError = () => {
    if (!emailState.isvalid) {
      emailInputRef.current.focus();
      setValidMessage("email Can't Be Empty");
    } else {
      passwordInputRef.current.focus();
      setValidMessage("password Can't Be Empty");
    }
  };

  return (
    <div className="login-form">
      {/* // className={`class ${!isValid ? "invalid" : ""}`} */}
      <Form
        id="form"
        onSubmit={submitHandler}
        className={`class ${!formIsValid && formIsSubmted ? "invalid" : ""}`}
      >
        {!formIsValid && formIsSubmted && (
          <InputValidationAlert message={validMessage} />
        )}

        <Container className="Container">
          <Form.Group className="mb-3" controlId="formBasicemail">
            {/* // onChange={handleEmailChange} */}
            <Form.Control
              ref={emailInputRef}
              type="text"
              placeholder="email..."
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicpassword">
            {/* // onChange={handlePasswordChange} */}
            <Form.Control
              ref={passwordInputRef}
              type="text"
              placeholder="password..."
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </Form.Group>
        </Container>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
