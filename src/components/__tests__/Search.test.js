import { render, screen, fireEvent,act } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { MOCK_DATA } from "../../../mocks/mockResList";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("should filter restaurants on search click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // Wait for the cards to load so the search input becomes available
  const searchBtn = await screen.findByRole("button", { name: /search/i });
  const input = screen.getByTestId("searchInput");

  fireEvent.change(input, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // Now check for the filtered cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2); 
});



it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(3);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated"
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(2);
});