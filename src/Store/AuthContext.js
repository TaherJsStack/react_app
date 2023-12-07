import React, { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    console.log("userData =>");

    if (userData) {
      console.log("userData =>", userData);
      setIsLoggedIn(true);
    } else {
      console.log("not userData =>", userData);
      setIsLoggedIn(false);
    }

    return () => {
      // cleanup
      console.log(" cleanup =>");
    };
  }, [isLoggedIn, setIsLoggedIn]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user =>", user);
    if (user) {
      <Redirect to="/backend" />;
      setIsLoggedIn(true);
    } else {
      <Redirect to="/login" />;
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn]);

  const loginHandler = async (email, password) => {
    let loginData = {
      authEmail: email,
      authPassword: password,
    };
    var formBody = [];
    for (var property in loginData) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(loginData[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    // await fetch("https://safe-reef-83338.herokuapp.com/api/auth/login", {
    //   method: "POST",
    //   body: formBody,
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    // })
    //   .then((response) => {
    //     console.log("response =>", response);
    //     return response.json();
    //   })
    //   .then((res) => {
    //     console.log("data =>", res);
    //     if (res.status == 200) {
          localStorage.setItem("user", JSON.stringify('res'));
          setIsLoggedIn(true);
      //   }
      // })
      // .catch((err) => {
      //   console.log('https://safe-reef-83338.herokuapp.com/api/auth/login --->', err);
      // });
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    <Redirect to="/login" />;
  };

  console.log("auth isLoggedIn =>", isLoggedIn);

  return (
    <AuthContext.Provider
      value={{
        isLoggedin: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
