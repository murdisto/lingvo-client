import React from "react";
import { shallow } from "enzyme";
import AnswerForm from "../answer-form";

describe("<AnswerForm />", () => {
  it("Renders without crashing", () => {
    shallow(<AnswerForm meta={{ touched: false }} input={{ name: null }} />);
  });
});
