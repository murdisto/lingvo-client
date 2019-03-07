import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import "./css/dashboard.css";
import { fetchNextWord } from "../actions/submission";
// eslint-disable-next-line no-unused-vars
import AnswerForm from "./answer-form";
// eslint-disable-next-line no-unused-vars
import ScoreKeeper from "./score-keeper";

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNextWord());
  }

  render() {
    return (
      <main className="dashboard">
        <div className="status">
          <p>Welcome {this.props.username}</p>
          <p>You have learned {this.props.progress}/10 words.</p>
        </div>
        <div className="answer card">
          <p>Translate "{this.props.question}" to English:</p>
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
