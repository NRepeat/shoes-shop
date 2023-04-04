import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import Order from "./order";

const showOrders=(props)=>{
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<div>
    {props.orders.map((element) => (
            <Order onDelete={props.onDelete}  key={element.id} item={element}/>
          ))}
          <p className="summa">Suma: {new Intl.NumberFormat().format(summa)}$ </p>
  </div>
  )
}

const showNothing=()=>{
  return(<div className="empty">
    <p className="p-empty">Nothing added in cart yet</p>
  </div>
  )
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo"></div>
        <nav className="nav-list">
          <ul>
            <FaShoppingBag
              onClick={() => setCartOpen((cartOpen = !cartOpen))}
              className={`shop-bag-button ${cartOpen && "active"}`}
            />
            <li className="li-item">Conatacts</li>
            <li className="li-item">Personal account</li>
          </ul>
        </nav>
        {cartOpen &&( <div className="shop-bag">
          {props.orders.length > 0 ?
              showOrders(props) : showNothing()

          }
          </div>
          )}
        <div className="bg-2"></div>
        <div className="bg"></div>
        <div className="baner"></div>
      </div>
    </header>
  );
}
