import "./CardsDataList.css";

import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DataForm from "../../Components/DataForm/DataForm";
import ItemCard from "../../Components/ItemCard";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";

const CardsDataList = () => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get("sort") == "asc";

  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataListHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log("data response=>", data);
      const loadedData = [];

      for (const key in data.slice(0, 18)) {
        loadedData.push({
          id: data[key].id,
          name: data[key].title,
          albumId: data[key].albumId,
          url: data[key].url,
          price: Math.floor(Math.random() * 100 + 1),
          totalPrice: 0,
          quantity: 0,
          color: "",
          selector: "",
          isActive: Math.round(Math.random() * 1 + 0) === 0,
          description: data[key].title,
          image: data[key].thumbnailUrl,
        });
      }

      setDataList(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataListHandler();
  }, [fetchDataListHandler]);

  const dataFormHanler = (dataForm) => {
    const data = {
      ...dataForm,
    };
    setDataList((oldDataList) => {
      return [data, ...oldDataList];
    });
  };

  const chsngeSortingHandler = () => {
    history.push(
      "/backend/cardslist?sort=" + (isSortAscending ? "desc" : "asc")
    );

    // dataList.sort((a, b) => (isSortAscending ? 1 : b.price > a.price ? -1 : 0));
    const order = isSortAscending ? true : false;
    console.log(dataList[0]);
    const test = [...dataList];
    test.sort(function (a, b) {
      return order ? a.id > b.id : a.id < a.id;
    });
    console.log(test[0]);
    setDataList(test);
    // console.log(test);
    // console.log(test[0].price, test[1].price);
  };

  const chsngeViweHandler = () => {
    console.log("chsngeViweHandler =>");
  };

  return (
    <div>
      <h1> Cards Data List</h1>

      {/* <Container>
        <Row>
          <Col xs={3}>
            <DataForm onSaveDataForm={dataFormHanler} />
          </Col>
        </Row>
      </Container> */}

      <Container>
        <Row>
          <Col xs={9}></Col>
          <Col xs={3} className="">
            <Button
              onClick={chsngeViweHandler}
              className="mr-1"
              variant="outline-warning"
              size="sm"
            >
              {" "}
              View Handler{" "}
            </Button>
            <Button onClick={chsngeSortingHandler} size="sm">
              {" "}
              Sort Is: {isSortAscending ? "Desinding" : "Ascinding"}
            </Button>
            <br />
            <br />
          </Col>
          <hr style={{ backgroundColor: "#ffc107", height: "2px" }} />
        </Row>
      </Container>

      <Container>
        <Row>
          {isLoading && (
            <Spinner
              animation="border"
              variant="primary"
              className="spinner-center"
            />
          )}
          {dataList.length === 0 && !isLoading && <p> NO Data List Found...</p>}
          {dataList.length > 0 &&
            dataList.map((data, index) => {
              return (
                <Col xs={3} key={data.id}>
                  <ItemCard list={data} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default CardsDataList;
