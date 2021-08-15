import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { Chat } from "./Pages";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path="/"
          component={() => (
            <ul>
              <li>
                <a href={"/chat"}>Go to chat</a>
              </li>
              <li>
                <a href="#">Go to profile</a>
              </li>
            </ul>
          )}
        />
        <Route path="/chat" component={() => <Chat />} />
        <Route
          path="*"
          component={() => (
            <div>
              <h1>404, page not found</h1>
              <a href={"/chat"}>Go to chat</a>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
