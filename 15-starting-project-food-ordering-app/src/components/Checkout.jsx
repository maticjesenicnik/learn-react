import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import UserProgressContext from "../context/UserProgressProvider";
import useHttp from "../hooks/useHttp";
import { currencyFormatter } from "../util/formatting";
import Error from "./Error";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { meals, clearCart } = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotal = meals.reduce((total, meal) => total + meal.price * meal.quantity, 0);

  const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp("http://localhost:3000/orders", requestConfig);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: meals,
          customer: customerData,
        },
      })
    );
  };

  const handleClose = () => {
    userProgressContext.closeCheckout();
  };

  const handleFinish = () => {
    userProgressContext.closeCheckout();
    clearCart();
    clearData();
  };

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={userProgressContext.progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully!</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressContext.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full name" type="text" id="name" />
        <Input label="E-mail address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order!" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
