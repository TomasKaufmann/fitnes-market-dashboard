import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

export const View = ({ data }) => {
  return <Container>{data}</Container>;
};

export default View

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  margin: 1%;
  width: 95%;
  height: 70%;
  background-color: #ccc;
`;
