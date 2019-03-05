import React from "react";
import { Field, reduxForm, focus, reset } from "redux-form";
import { userAnswer, modalSetter } from "../actions/submission";
import Input from "./input";

//submitAnswer(answer)
export class AnswerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onSubmit(answer) {
    //console.log("the submission is ", answer);
    this.handleOpenModal();
    this.props.dispatch(reset("answer"));
    this.props.dispatch(modalSetter(true));
    return this.props.dispatch(userAnswer(answer.answer));
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="answer">Answer Here:</label>
          <Field component={Input} type="text" name="answer" />
          <br />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "answer",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("answer", Object.keys(errors)[0]))
})(AnswerForm);
