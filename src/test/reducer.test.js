import React from "react";
import { shallow, mount } from "enzyme";

import Reducer from "../reducers/index";

describe("<Reducer />", () => {
  it("Renders without crashing", () => {
    shallow(<Reducer />);
  });
});
