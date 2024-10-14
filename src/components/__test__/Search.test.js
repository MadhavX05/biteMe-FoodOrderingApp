import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTAURENT_DATA } from "../mocks/data";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURENT_DATA);
    },
  });
});

test("Search Result on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  console.log(body);
});
