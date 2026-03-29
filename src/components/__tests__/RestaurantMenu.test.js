import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import {provider} from "react-router-dom";
import CategoryCard from "../CategoryCard";
import Cart from "../Cart";


test("should add item to cart on button click", () => {

  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  // // Find button
  // const addButton = screen.getAllByText("Add +");

  // // Click button
  // fireEvent.click(addButton);

  // // Check if cart updated
  // const cartItems = screen.getByText(/Cart/);

  // expect(cartItems).toBeInTheDocument();

}); 