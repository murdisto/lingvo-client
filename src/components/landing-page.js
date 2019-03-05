import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./css/landing-page.css";
import LoginForm from "./login-form";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div role="main" className="home">
      <h1>Welcome to learning Esperanto</h1>
      <p>
        Here you will learn how to speak esperanto. Login or register and give
        it a try! We will track your progress and let you know how you are
        doing. For your first lesson we will teach you hundo which means dog in
        esperanto.
      </p>
      <LoginForm />
      <span>
        Not signed up? <Link to="/register">Register</Link>
      </span>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
