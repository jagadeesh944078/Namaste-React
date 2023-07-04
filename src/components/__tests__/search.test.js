import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTARENT_DATA } from "../../mock/restarent";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTARENT_DATA);
    },
  });
});

test("should show shimmer on render homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  /* it will check whether shimmer will be there is document are not */
  //   expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(5);
});

test("should load serach on render body", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("seach for Street food on HomePage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));
  const input = body.getByTestId("search");
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2);
});
