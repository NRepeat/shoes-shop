import React, { Component } from "react";

export class ShowFullInformation extends Component {
  render() {
    return (
      <div className="full-item">
        <div className="full-item-wrapper">
          <img
            onClick={() => this.props.fullDiscript(this.props.item)}
            className="item-img "
            src={"./img/" + this.props.item.img}
            alt=""
          ></img>
          <h2 className="h2">{this.props.item.title}</h2>
          <p className="p">{this.props.item.desc}</p>
          <p className="p dolar">{this.props.item.price}</p>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            Add to cart
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullInformation;
