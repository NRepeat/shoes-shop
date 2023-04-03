import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="item-img "
          src={"./img/" + this.props.item.img}
          alt=""
        ></img>
        <h2 className="h2">{this.props.item.title}</h2>
        <p className="p">{this.props.item.desc}</p>
        <p className="p dolar">{this.props.item.price}</p>
        <div className="add-to-cart">Add to cart</div>
      </div>
    );
  }
}

export default Item;
