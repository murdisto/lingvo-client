import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import "./css/dashboard.css";
import { fetchNextWord } from "../actions/submission";
import Progressbar from "./progressbar";
import AnswerForm from "./answer-form";
import ScoreKeeper from "./score-keeper";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNextWord());
  }

  render() {
    return (
      <main className="dashboard">
        <h1>Welcome {this.props.username}</h1>

        <span>You have mastered {this.props.progress} words of Esperanto</span>
        <Progressbar progress={this.props.progress} />
        <div className="customBr" />
        <div>
          <h2>Translate this word to English:</h2>
          <span>{this.props.question}</span>
        </div>
        <div className="customBr" />
        <div className="gridRow">
          <br />
          <div>
            <AnswerForm /> <ScoreKeeper />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName}`,
    question: state.test.question,
    userInput: state.test.userInput,
    progress: state.test.progress,
    loggedIn: state.auth.currentUser !== null
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
