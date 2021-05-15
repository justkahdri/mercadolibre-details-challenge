import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import DetailsScreen from "../product/screens/Details";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={DetailsScreen} path="/" />
      <Route component={DetailsScreen} path="/:product" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
