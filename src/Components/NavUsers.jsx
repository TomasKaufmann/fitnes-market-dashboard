import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Tile from "./Tile";

export default function NavUsers(data) {
  console.log(data);
  
  return (
    <Container>
      <StyledLink to={"/users/list"}>
        <Tile title="Listado Usuarios" data="" />
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
  text-decoration: none;
  color: #000;
  text-align: center;
`;
