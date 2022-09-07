import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux"

import Login from "./login.component";

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
     
      return (<Routes><Route path="/login" element = {<Login/>}/> </Routes>)
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default Profile;
