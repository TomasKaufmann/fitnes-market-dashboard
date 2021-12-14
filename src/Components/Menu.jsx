/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import logo from "../static/logo.png";
import axios from "axios";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
export default function Menu() {
  return (
    <Container>
      <img src={logo} />
      <ul>
        <li>
          <HyperLink to="/products">
            <BsBoxSeam />
            <p>Productos</p>
          </HyperLink>
        </li>
        <li>
          <HyperLink to="/users">
            <HiOutlineUsers />
            <p>Usuarios</p>
          </HyperLink>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  margin: 1%;
  margin-right: 0;
  width: 20%;
  height: 750px;
  background-color: #2f9bbf;

  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 5%;
    justify-content: flex-start;
    width: 100%;

    li {
      list-style: none;
      margin: 5%;
      width: 100%;
      display: flex;
      align-items: start;
    }
  }

  img {
    width: 50%;
    margin: 2%;
  }
`;

const HyperLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-decoration: none;
  padding-left: 5px;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    color: black;
  }

  p {
    padding-left: 3%;
    font-size: 18px;
  }
`;
