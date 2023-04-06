import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          onClick={() => this.props.fullDiscript(this.props.item)}
          className="item-img "
          src={"./img/" + this.props.item.img}
          alt=""
        ></img>
        <h2 className="h2">{this.props.item.title}</h2>
        
        <p className="p dolar">{this.props.item.price}</p>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          Add to cart
        </div>
      </div>
    );
  }
}

export default Item;
