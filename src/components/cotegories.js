import React, { Component } from "react";

export class Cotegories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: "all",
          name: "All items",
        },
        {
          key: "sniker",
          name: "Snikers",
        },
        {
          key: "lofer",
          name: "Lofers",
        },
        {
          key: "shoes",
          name: "Shoes",
        },
        {
          key: "boots",
          name: "Boots",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div className="categ-item" onClick={ () => this.props.selectCategory(el.key) } key={el.key}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default Cotegories;
