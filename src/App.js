import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/cotegories";
import React from "react";
import ShowFullInformation from "./components/ShowFullInformation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: "Белые мужские кроссовки GHOUD",
          img: "sniker-1.jpg",
          desc: "Современная модная модель Rush Groove от Ghoud имеет урбанистический дизайн, характеризующийся геометрическими и решительными линиями. Эта модель изготовлена из комбинации дышащего сетчатого текстиля и белой замши с матовыми резиновыми деталями. Мягкий язык с логотипом. Яркая подошва с характерным вырезом – финальный штрих.",
          category: "sniker",
          price: "149.00",
        },
        {
          id: 2,
          title: "Мужские брогги Santoni",
          img: "shoes-1.jpeg",
          desc: "Замшевые мужские туфли Santoni с декоративным броггированием. Выполнены из натуральной замши коричневого цвета с кожаным кантом. Высокая легкая подошва с глубоким протектором.",
          category: "shoes",
          price: "249.00",
        },
        {
          id: 3,
          title: "Лоферы Furla Rita",
          img: "lofer-1.jpeg",
          desc: "Женские лоферы Furla из натуральной замши коньячного оттенка с деталями из черной кожи. Очень легкая высокая ребристая подошва. Украшены логотипом",
          category: "lofer",
          price: "199.00",
        },
        {
          id: 4,
          title: "Ботинки мужские Aldo Brue",
          img: "boots-1.jpg",
          desc: "Мужские демисезонные полуботинки Aldo Brue из натуральной черной замши с кожаным кантом. Высокая легкая подошва. Ручная работа.",
          category: "boots",
          price: "399.00",
        },
      ],
      showFullDiscription: false,
      fullItem:{}
    };

    this.state.selectedItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.fullDiscript = this.fullDiscript.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories selectCategory={this.selectCategory} />
        <Items
          fullDiscript={this.fullDiscript}
          items={this.state.selectedItems}
          onAdd={this.addToOrder}
        />
        
        {this.state.showFullDiscription && <ShowFullInformation onAdd={this.addToOrder} fullDiscript={this.fullDiscript} item = {this.state.fullItem} />}
        <Footer />
      </div>
    );
  }


  fullDiscript(item) {
    this.setState({fullItem:item})
    this.setState({ showFullDiscription: !this.state.showFullDiscription });
  }
  selectCategory(category) {
    if (category === "all") {
      this.setState({ selectedItems: this.state.items });
      return;
    }

    this.setState({
      selectedItems: this.state.items.filter((el) => el.category === category),
    });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;
