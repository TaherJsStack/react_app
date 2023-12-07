import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <h1>DashBoard </h1>
    </div>
  );
}

export default Dashboard;
