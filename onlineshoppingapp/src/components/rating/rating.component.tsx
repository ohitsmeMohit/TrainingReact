import React, { Component } from "react";

type RatingProps = {
  noofstars: number;
  color: string;
};

export default class Rating extends Component<RatingProps> {
  render() {
    let ratings = [];

    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(
        <span style={{ color: this.props.color }} key={index}>
          <i className="fa-solid fa-star"></i>
        </span>,
      );
    }
    return ratings;
  }
}
