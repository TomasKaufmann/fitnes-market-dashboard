import React from "react";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3050/api/products/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(e => console.log(e))
    //.then((products) => this.setState({ data: products }));
  }

  render() {
    return <div></div>;
  }
}

export default ProductList;
