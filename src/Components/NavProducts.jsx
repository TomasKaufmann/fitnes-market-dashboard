import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Tile from "./Tile";

export default function NavProducts() {

  const [products, setProducts] = useState("")

  const getProducts = async () => {
    const data = await fetch("http://localhost:3050/api/products/");
    const res = await data.json();
    setProducts(res);
  
  };

  useEffect(() => {
    getProducts();
    console.log(products.ultimo_producto.product_name);
  }, [])
  
 

  return (
    <Container>
      <StyledLink to={"/products/total"}>
        <Tile title="Total Productos" data={String(products.total)} />
      </StyledLink>
      <StyledLink to={"/products/categories"}>
        <Tile title="Total Categorias" data="4" />
      </StyledLink>
      <StyledLink to={"/products/last-created"}>
        <Tile
          title="Último Producto"
          data={products.ultimo_producto.product_name}
        />
      </StyledLink>
      <StyledLink to={"/products/list"}>
        <Tile title="Listado Productos" data="" />
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
