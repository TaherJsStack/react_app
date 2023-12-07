import React, { useContext } from "react";

import AuthContext from "../Store/AuthContext";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);

    console.log("MainHeader Consumer ctx =>", ctx.isLoggedIn);

  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    // console.log("MainHeader Consumer ctx =>", ctx.isLoggedIn);
    // return (
    <header>
      <Link to="/"> backend </Link>
      <Link to="/frontend"> frontend </Link>
      <Link to="/login"> login </Link>
    </header>
    // );
    // }
    // }
    // </AuthContext.Consumer>
  );
};

export default MainHeader;
