import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Views
import Root from "./Root";
import Sow from "./views/kyc/Sow";
// import NotFound from "./views/Pages/Page404/Page404";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Sow} exact path="/kyc/sow" />
        <Route component={Root} exact path="/:lmsrAddress" />
        <Route component={Root} exact path="/" />
      </Switch>
    );
  }
}

// <Redirect exact from="/" to="/markets" />
// <Route component={NotFound} exact path="/not-found"/>
// <Redirect to="/not-found" />
