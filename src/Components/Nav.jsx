import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import Tile from "./Tile";
import axios from "axios";

export default function Nav() {

   

  return (
    <Container>
      <StyledLink to={"/products/total"}>
        <Tile title="Total Productos" data="Count" />
      </StyledLink>
      <StyledLink to={"/products/categories"}>
        <Tile title="Total Categorias" data="Count" />
      </StyledLink>
      <StyledLink to={"/products/last-created"}>
        <Tile title="Último Producto" data="Count" />
      </StyledLink>
      <StyledLink to={"/products/last-created"}>
        <Tile title="a" data="Count" />
      </StyledLink>
    </Container>
  );
  }


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2%;
  width: 95%;
  height: 30%;
  background-color: white;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  margin: 1%;
  width: 30%;
  height: 60%;
  background-color: #ccc;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
`;
