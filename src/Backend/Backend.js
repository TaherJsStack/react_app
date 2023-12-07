import "./Backend.css";

import React, { BrowserRouter, useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AsidButtons from "./Components/AsidButtons";
import CardsDataList from "./Pages/Cards/CardsDataList";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Form from "./Pages/Form/Form";
import ModalError from "./Components/Modals/ModalError";
import MoreInfo from "./Components/Item/MoreInfo";
import NavTop from "./Components/NavTop";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import TableItemsDataList from "./Pages/Table/TableItemsDataList";

const DUMMY_DATA_LIST = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

const Backend = () => {
  const dataList = DUMMY_DATA_LIST;

  const errorObj = {
    title: `'Backend Page' => any test title`,
    message: " 'Backend Page' => any test error message",
  };

  return (
    <div className="backend">
      {ReactDOM.createPortal(
        <ModalError content={errorObj} />,
        document.getElementById("modal-root")
      )}

      <Container className="Container" fluid>
        <Row>
          <Col className="Asid" sm={2}>
            <AsidButtons />
          </Col>

          <Col className="Sections" sm={10}>
            <Row>
              <NavTop />
            </Row>

            <Row>coffee</Row>
            <Switch>
              {/* <BrowserRouter> */}
              <Route exact path="/backend">
                <Dashboard />
              </Route>
              <Route exact path="/backend/dashboard">
                <Dashboard />
              </Route>

              <Route path="/backend/tablelist">
                <TableItemsDataList dataList={dataList} />
              </Route>

              <Route path="/backend/cardslist" exact>
                <CardsDataList dataList={dataList} />
              </Route>

              <Route path="/backend/cardslist/:infoId">
                <MoreInfo />
              </Route>

              <Route path="/backend/form">
                <Form />
              </Route>

              <Route path="*">
                <NotFoundPage />
              </Route>

              {/* </BrowserRouter> */}
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Backend;
