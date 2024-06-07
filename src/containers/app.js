import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "../components/Home";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={() => <HomeContainer />} />
      </Switch>
    </HashRouter>
  );
};

export default App;
