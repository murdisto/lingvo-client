import React from "react";
import { shallow } from "enzyme";
import ScoreKeeper from "../score-keeper";

describe("<ScoreKeeper />", () => {
  it("Renders without crashing", () => {
    shallow(<ScoreKeeper />);
  });
});
