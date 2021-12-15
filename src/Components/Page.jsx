import React, { useState } from "react";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";
import { ContentProducts } from "./ContentProducts";
import { ContentUsers } from "./ContentUsers";
import styled from "styled-components";
import ViewProducts from "./ViewProducts";
import ViewUsers from "./ViewUsers";

export default function Page() {
  const chartData = {
    labels: ["Musculacion", "Indumentaria", "Suplementos", "Equipamiento"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 3, 5, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const [products, setProducts] = useState("");

  const getProducts = async () => {
    const data = await fetch("http://localhost:3050/api/products/");
    const res = await data.json();
    setProducts(res);
  };

  getProducts();

  const [users, setUsers] = useState("");

  const getUsers = async () => {
    const data = await fetch("http://localhost:3050/api/users/");
    const res = await data.json();
    setUsers(res);
  };

  getUsers();

  return (
    <StyledDiv>
      <Menu />
      <Routes>
        <Route path={"/products/*"} element={<ContentProducts />}>
          <Route
            path={"list"}
            element={<ViewProducts data={products.data} table={true} />}
          />
          <Route path={"total"} element={<ViewProducts data={chartData} />} />
          <Route
            path={"last-created"}
            element={<ViewProducts data={chartData} />}
          />
        </Route>

        <Route path={"/users/*"} element={<ContentUsers />}>
        <Route
            path={"list"}
            element={<ViewUsers data={users.data} table={true} />}
          />
        </Route>
      </Routes>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
