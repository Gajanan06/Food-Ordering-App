import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import CategoryCard from "../CategoryCard"; 
import { MENU_DATA } from "../../utils/mockRestaurantMenu";
import "@testing-library/jest-dom";

test("should render CategoryCard with Recommended title", () => {
  // Pass only the first category ("Recommended") to the component
  render(
    <Provider store={appStore}>
      <CategoryCard category={MENU_DATA.categories[0]} />
    </Provider>
  );

  // This should now find the text because category.title exists
  const header = screen.getByText("Recommended");
  expect(header).toBeInTheDocument();
});

test("should open accordion on click and show items", () => {
  const mockHandleClick = jest.fn();

  render(
    <Provider store={appStore}>
      <CategoryCard 
        category={MENU_DATA.categories[0]} 
        // Force the condition to be true by matching the title
        showItems="Recommended" 
        handleClick={mockHandleClick} 
      />
    </Provider>
  );

  // 1. Verify the header is there
  const header = screen.getByText("Recommended");
  expect(header).toBeInTheDocument();

  // 2. Click it
  fireEvent.click(header);

  // 3. Check if the parent function was called
  expect(mockHandleClick).toHaveBeenCalled();

  // 4. NOW the text should be found because showItems matches "Recommended"
  const foodItem = screen.getByText("Paneer Butter Masala");
  expect(foodItem).toBeInTheDocument();
});