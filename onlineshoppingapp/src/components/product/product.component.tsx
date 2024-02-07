import React, { Component } from "react";
import ProductModel from "../../models/product.model";
import Rating from "../rating/rating.component";

type ProductPropType = {
  productdetails: ProductModel;
  DeleteAProduct: (id: number) => void;
};

export default class Product extends Component<ProductPropType> {
  state = { currLikes: this.props.productdetails.likes, isFavourite: false };
  componentWillMount(): void {
    // console.log("Within componentWillMount");
  }
  componentDidMount(): void {
    // console.log("Within componentDidMount");
  }
  IncrementLikes(): void {
    // console.log("Within increment likes");
    // console.log(this);
    // this.props.productdetails.likes += 1; // props are readonly for UI
    // this.state.currLikes += 1; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }

  render() {
    // console.log("Render");
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card" style={{ boxShadow: "3px 3px 5px gray" }}>
          <img
            src={this.props.productdetails.imageUrl}
            alt={this.props.productdetails.title}
            className="card-img-top rounded-0"
            height="200px"
          />
          <div className="card-body p-2">
            <div className="d-flex flex-wrap justify-content-between">
              <h5 className="card-title">{this.props.productdetails.title}</h5>
              <div className="card-text m-0">
                <Rating
                  noofstars={this.props.productdetails.rating}
                  color="orange"
                />
              </div>
            </div>

            <p className="card-text "> ₹.{this.props.productdetails.price}</p>

            <div className="d-flex flex-wrap align-items-center">
              <button
                className="btn btn-primary"
                onClick={() => this.IncrementLikes()}
              >
                <i className="fa-solid fa-thumbs-up"></i>{" "}
                {/* {this.props.productdetails.likes} */}
                {this.state.currLikes}
              </button>
              <button
                className="btn btn-danger mx-1"
                onClick={() =>
                  this.props.DeleteAProduct(this.props.productdetails.id)
                }
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={() =>
                  this.setState({ isFavourite: !this.state.isFavourite })
                }
              >
                {this.state.isFavourite === false ? (
                  <i className="fa-regular fa-heart"></i>
                ) : (
                  <i className="fa-solid fa-heart"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillUpdate(
    nextProps: Readonly<ProductPropType>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): void {
    // console.log("Within Component Will Update");
  }

  componentDidUpdate(
    prevProps: Readonly<ProductPropType>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    // console.log("Within Component Did Update");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }
}
