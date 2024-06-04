import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "../components/home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <HomeContainer/>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
