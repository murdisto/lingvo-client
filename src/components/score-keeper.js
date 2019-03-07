import React from "react";
import { connect } from "react-redux";
import { modalSetter } from "../actions/submission";
import ReactModal from "react-modal";
import "./css/score-keeper.css";

class ScoreKeeper extends React.Component {
  render() {
    let temp = null;
    if (this.props.userInput !== null) {
      if (this.props.correct === true) {
        temp = (
          <div className="answer-div">
            Correct!
          </div>
        );
      } else if (this.props.correct === false) {
        temp = (
          <div className="answer-div">Sorry, {this.props.userInput} is incorrect.</div>
        );
      } else {
        temp = <div />;
      }
    } else {
      temp = <div />;
    }

    return (
      <ReactModal
        isOpen={this.props.showModal}
        contentLabel="Minimal Modal Example"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
        {temp}
        <br/>
        <button onClick={() => this.props.dispatch(modalSetter(false))}>
          Next
        </button>
      </ReactModal>
    );

  }
}

const mapStateToProps = state => ({
  userInput: state.test.userInput,
  correct: state.test.correct,
  showModal: state.test.showmodal
});

export default connect(mapStateToProps)(ScoreKeeper);
