import React, { useContext } from "react";
import Logo from "../assets/logo.jpg";
import { CartContext } from "../context/ShoppingCartProvider";
import UserProgressContext from "../context/UserProgressProvider";

export default function Header() {
  const { showCart } = useContext(UserProgressContext);
  const { meals } = useContext(CartContext);
  const mealCount = meals.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="A restaurant logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button className="text-button" onClick={showCart}>
          Cart ({mealCount})
        </button>
      </nav>
    </header>
  );
}
