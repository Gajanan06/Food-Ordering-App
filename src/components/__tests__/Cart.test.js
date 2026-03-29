// Cart.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import store from "../../utils/appStore";
import "@testing-library/jest-dom";

test("should clear cart when button is clicked", () => {

  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const button = screen.getByText("Clear Cart");

  fireEvent.click(button);

  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();

});