import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          totalAmount: cart.totalAmount,
          totalQuantity: cart.totalQuantity,
          items: cart.items,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending data cart failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATABASE_URL}/cart.json`);

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      return await response.json();
    };

    try {
      const data = await fetchData();

      dispatch(
        cartActions.replaceCart({
          ...data,
          items: data.items || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
