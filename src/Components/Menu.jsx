/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import logo from "../static/logo.png";
import axios from "axios";

export default function Menu() {
  return (
    <Container>
      <img src={logo} />
      <ul>
        <li>
          <HyperLink to="/products">Productos</HyperLink>
        </li>
        <li>
          <HyperLink to="/users">Usuarios</HyperLink>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid grey;
  margin: 1%;
  margin-right: 0;
  width: 20%;
  height: 750px;
  background-color: #2f9bbf;

  ul {
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    align-items: start;
    
    li {
      list-style: none;
    }

  }

  img{
    width: 40%;
    margin 2%;

  }
`;

const HyperLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  padding-left: 5px;
  color: #444cae;
  &:hover {
    color: black;
  }
`;

const ActiveHyperLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  padding-left: 5px;
  color: #444cae;
`;
