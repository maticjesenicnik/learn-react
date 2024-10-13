import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import UserProgressContext from "../context/UserProgressProvider";
import { currencyFormatter } from "../util/formatting";
import CartItem from "./CartItem";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function Cart() {
  const { meals, addMeal, removeMeal } = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotal = meals.reduce((total, meal) => total + meal.price * meal.quantity, 0);

  const handleCloseCart = () => {
    userProgressContext.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressContext.openCheckout();
  };

  return (
    <Modal className="cart" open={userProgressContext.progress === "cart"} onClose={userProgressContext.progress === "cart" ? handleCloseCart : null}>
      <h2>Your cart</h2>
      <ul>
        {meals.map(meal => (
          <CartItem key={meal.id} name={meal.name} quantity={meal.quantity} price={meal.price} onIncrease={() => addMeal(meal)} onDecrease={() => removeMeal(meal.id)} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {meals.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
}
