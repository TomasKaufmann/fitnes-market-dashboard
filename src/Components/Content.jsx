/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import View from "./View";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";

export default function Content() {
  const [data, setData] = useState("");

  const getData = () => {
    fetch("http://localhost:3050/api/products/")
      .then((res) => {
        console.log(res.json());
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Nav />
      <ProductList />
      <Routes>
        {console.log(window.location.host)}
        <Route path={"/products/total"} element={<View data="graficos / datos" />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  margin: 1%;
  width: 80%;
  height: 750px;
  background-color: #2f9bbf;
`;
