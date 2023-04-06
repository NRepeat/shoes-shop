import React, { Component } from "react";
import Item from "./item";

export class Items extends Component {
  render() {
    return (
      <main className="main">
        
        {this.props.items.map((element) => (
          <Item fullDiscript={this.props.fullDiscript} key={element.id} item={element} onAdd = {this.props.onAdd} />
        ))}

      </main>
    );
  }
}

export default Items;
