import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import "./css/header-bar.css";
import { Link } from "react-router-dom";


export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <div>
          <Link to="/logout">
            <button className="topnav-right" onClick={() => this.logOut()}>
              Log out
            </button>
          </Link>
        </div>

      );
    }
    return (
      <React.Fragment>
        <header>
          <div className="topnav">
            <span href="#home">Lingvo</span>
            {logOutButton}
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
