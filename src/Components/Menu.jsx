/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import logo from "../static/logo.png";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { ContentProducts } from "./ContentProducts";
import { ContentUsers } from "./ContentUsers";
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
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    width: 100%;

    li {
      list-style: none;
      margin: 0;
      width: 100%;
      display: flex;
      align-items: start;
      &:hover {
        background-color: #71749d;
      }
    }
  }

  img {
    width: 50%;
    margin: 2%;
  }
`;

const HyperLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  text-decoration: none;
  padding-left: 5%;
  color: #000;
  font-weight: 600;
  font-size: 16px;

  p {
    padding-left: 3%;
    font-size: 18px;
  }
`;
