import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider.jsx";
import { currencyFormatter } from "../util/formatting.js";

export default function MealItem({ meal }) {
  const { addMeal } = useContext(CartContext);

  return (
    <li className="meal-item" key={meal.name}>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={() => addMeal(meal)}>
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}
