import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Белые мужские кроссовки GHOUD",
          img: "sniker-1.jpg",
          desc: "Современная модная модель Rush Groove от Ghoud имеет урбанистический дизайн, характеризующийся геометрическими и решительными линиями. Эта модель изготовлена из комбинации дышащего сетчатого текстиля и белой замши с матовыми резиновыми деталями. Мягкий язык с логотипом. Яркая подошва с характерным вырезом – финальный штрих.",
          category: "snikers",
          price: "149.00",
        },
        {
          id: 2,
          title: "Белые мужские кроссовки GHOUD",
          img: "sniker-1.jpg",
          desc: "Современная модная модель Rush Groove от Ghoud имеет урбанистический дизайн, характеризующийся геометрическими и решительными линиями. Эта модель изготовлена из комбинации дышащего сетчатого текстиля и белой замши с матовыми резиновыми деталями. Мягкий язык с логотипом. Яркая подошва с характерным вырезом – финальный штрих.",
          category: "snikers",
          price: "149.00",
        },
        {
          id: 3,
          title: "Белые мужские кроссовки GHOUD",
          img: "sniker-1.jpg",
          desc: "Современная модная модель Rush Groove от Ghoud имеет урбанистический дизайн, характеризующийся геометрическими и решительными линиями. Эта модель изготовлена из комбинации дышащего сетчатого текстиля и белой замши с матовыми резиновыми деталями. Мягкий язык с логотипом. Яркая подошва с характерным вырезом – финальный штрих.",
          category: "snikers",
          price: "149.00",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
