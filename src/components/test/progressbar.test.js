import React from "react";
import { shallow } from "enzyme";
import Progressbar from "../progressbar";

describe("<Progressbar />", () => {
  it("Renders without crashing", () => {
    shallow(<Progressbar />);
  });
});
