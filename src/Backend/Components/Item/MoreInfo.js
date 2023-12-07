import "./MoreInfo";

import React from "react";
import { useParams } from "react-router-dom";

const MoreInfo = () => {
  const params = useParams();

  console.log(" MoreInfo ========>", MoreInfo);

  return (
    <>
      {!params.infoId && "No Data Found..."}

      {params.infoId && <h1>MoreInfo {params.infoId}</h1>}
    </>
  );
};

export default MoreInfo;
