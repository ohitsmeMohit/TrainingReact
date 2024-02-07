import React, { Component } from "react";
import ProductModel from "../../models/product.model";
import Product from "../product/product.component";

export default class ListOfProducts extends Component {
  productList: Array<ProductModel> = [];
  state = {
    productList: this.productList,
  };
  DeleteAProduct(id: number) {
    console.log("Deleting Product..", id);
    let newProductList = this.state.productList.filter(
      (p: ProductModel) => p.id !== id,
    );
    this.setState({ productList: newProductList });
  }

  render() {
    return (
      <div className="row g-3">
        {this.state.productList.map(product => (
          <Product
            productdetails={product}
            key={product.id}
            DeleteAProduct={id => this.DeleteAProduct(id)}
          />
        ))}
      </div>
    );
  }

  componentDidMount(): void {
    fetch("http://localhost:3500/products")
      .then(res => res.json())
      .then(products => this.setState({ productList: products }));
  }
}
