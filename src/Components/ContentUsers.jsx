/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import NavUsers from "./NavUsers";
import { Route, Routes, Outlet } from "react-router-dom";

export const ContentUsers = () => {
  const [users, setUsers] = useState("");

  const getData = async () => {
    const data = await fetch("http://localhost:3050/api/users/");
    const res = await data.json();
    setUsers(res);
  };

  getData();

  return (
    <Container>
      <NavUsers data={users} />

      <Outlet />
    </Container>
  );
};

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

export default ContentUsers;
