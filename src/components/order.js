import React, { Component } from "react";
import { CiSquareRemove } from "react-icons/ci";
export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          className="item-img "
          src={"./img/" + this.props.item.img}
          alt=""
        ></img>
        <h2 className="h2">{this.props.item.title}</h2>
        <p className="p dolar">{this.props.item.price}</p>
        <CiSquareRemove className="remove-icon" onClick={()=> this.props.onDelete(this.props.item.id)}/>
      </div>
    );
  }
}

export default Order;
