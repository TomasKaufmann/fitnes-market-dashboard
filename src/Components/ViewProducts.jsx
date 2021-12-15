import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Table from "./Table";

ChartJS.register(ArcElement, Tooltip, Legend);

const columns = [
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Categoría",
    accessor: "categoria",
  },
  {
    Header: "Descripción",
    accessor: "descripcion",
  },
];

export const ViewProducts = ({ data, table, single }) => {
  if (table) {
    return (
      <Container>
        <Table dataColumns={columns} dataRows={data ? [...data] : []} />
      </Container>
    );
  } else if (single) {
    return (
      <Container>
        <p>{data.product_name}</p>
      </Container>
    );
  } else {
    return (
      <Container>
        <ChartContainer>
          <Pie data={data} />
        </ChartContainer>
      </Container>
    );
  }
};

export default ViewProducts;

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

const ChartContainer = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
