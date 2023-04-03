import React from "react";

export default function header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo"></div>
        <nav className="nav-list">
          <ul>
            <li className="li-item">Cart</li>
            <li className="li-item">Conatacts</li>
            <li className="li-item">Personal account</li>
          </ul>
        </nav>

        <div className="bg-2"></div>
        <div className="bg"></div>
        <div className="baner"></div>
      </div>
    </header>
  );
}
