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
            Nice, {this.props.userInput} is Correct
          </div>
        );
      } else if (this.props.correct === false) {
        temp = (
          <div className="answer-div">{this.props.userInput} is Incorrect</div>
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
        <button onClick={() => this.props.dispatch(modalSetter(false))}>
          Next Question
        </button>
      </ReactModal>
    );

    //console.log(this.props.correct);
  }
}

const mapStateToProps = state => ({
  userInput: state.test.userInput,
  correct: state.test.correct,
  showModal: state.test.showmodal
});

export default connect(mapStateToProps)(ScoreKeeper);
