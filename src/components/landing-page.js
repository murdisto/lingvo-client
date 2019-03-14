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
      <h2>Learn Esperanto!</h2>
      <p>
        Here you will learn some words Esperanto. Login or register and give
        it a try! We will track your progress and let you know how well you are
        doing. For your first lesson we will teach you "hundo" which means dog in
        Esperanto.
      </p>
      <section className="subcard">
        <LoginForm />
      </section>
      <span>
        Not signed up? <Link to="/register">Register</Link>
      </span>
     
      <p>
      Just want to demo the app? Use these:
        <br /> 
        Username: demo 
        <br /> 
        Password: password12
      </p>
            
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
