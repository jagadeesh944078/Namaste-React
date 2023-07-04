import { fireEvent, render, waitFor } from "@testing-library/react";
import RestaurentMenu from "../RestaurentMenu";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mock/menu";
import store from "../../utils/store";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("should show Restraent Card on rendering card page", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurentMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(menu.getByTestId("menu-card"));
  });
  const btn = menu.getAllByTestId("add-btn");
  fireEvent.click(btn[0]);
  fireEvent.click(btn[1]);
  const cart = menu.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 2");
});
