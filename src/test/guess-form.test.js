import React from "react";
import { shallow, mount } from "enzyme";
import GuessForm from "../components/guess-form";
import { Provider } from "react-redux";
import store from "../store";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <GuessForm />
      </Provider>
    );
  });
});
