import React from "react";
import { render } from "react-dom";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import App from "./containers/App";
const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

render(<App />, document.getElementById("root"));
