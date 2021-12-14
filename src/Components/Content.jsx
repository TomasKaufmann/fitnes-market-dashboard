/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import View from "./View";
import { Route, Routes } from "react-router-dom";

const chartData = {
  labels: ["Musculacion", "Indumentaria", "Suplementos", "Equipamiento"],
  datasets: [
    {
      label: "# of Votes",
      data: [
        2,
        3,
        5,
        1,
      ],
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

export const Content = () => {
  const [totalMusculacion, setTotalMusculacion] = useState(0);
  const [totalIndumentaria, setTotalIndumentaria] = useState(0);
  const [totalSuplementos, setTotalSuplementos] = useState(0);
  const [totalEquipamiento, setTotalEquipamiento] = useState(0);

  
  const [products, setProducts] = useState("");

  // const setChartData = () => {
  //   if (products) {
  //     products.data.forEach((element) => {
  //       // eslint-disable-next-line default-case
  //       switch (element.category_id) {
  //         case 1:
  //           setTotalIndumentaria(totalIndumentaria + 1);
  //           break;
  //         case 2:
  //           setTotalSuplementos(totalSuplementos + 1);
  //           break;
  //         case 3:
  //           setTotalEquipamiento(totalEquipamiento + 1);
  //           break;
  //         case 4:
  //           setTotalMusculacion(totalMusculacion + 1);
  //           break;
  //       }
  //     });
  //   } else {  }
  // };

  // setChartData();

  const getData = async () => {
    const data = await fetch("http://localhost:3050/api/products/");
    const res = await data.json();
    setProducts(res);
  };

  getData();

  return (
    <Container>
      <Nav data={products} />
      <Routes>
        <Route path={"/products/total"} element={<View data={chartData} />} />
        <Route path={"/products/last-created"} element={<View data={chartData} />} />
        <Route path={"/products/list"} element={<View data={products.data} table={true} />} />
      </Routes>
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

export default Content;
