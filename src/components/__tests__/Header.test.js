import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("should load logo on render header component", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.jpg");
  //   expect(logo[0].src).toBe(
  //     "https://www.designmantic.com/logo-images/1759.png?company=Company%20Name&slogan=&verify=1"
  //   );
});

test("should show online on render header component", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("online");
  expect(cart.innerHTML).toBe("✅");
});

test("should show cart 0 items on render header component", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});
