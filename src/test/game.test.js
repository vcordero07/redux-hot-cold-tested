import React from "react";
import { shallow, mount } from "enzyme";
import Game from "../components/game";
import { Provider } from "react-redux";
import store from "../store";

describe("<Game />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <Game />
      </Provider>
    );
  });
});
