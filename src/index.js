import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./index.css";
import { Header } from "./components";
import { ThemeProvider } from "./components/ThemeContext";
import { Chat, Profile } from "./pages";
import { store } from "./store";

const themes = {
  dark: {
    color: "#4346e0",
  },
  light: {
    color: "#9b9ce0",
  },
};

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider themes={themes} initialTheme="dark">
          <Header />
          <Switch>
            <Route
              exact={true}
              path="/"
              component={() => (
                <ul>
                  <li>
                    <Link to="/chat">Go to chat</Link>
                  </li>
                  <li>
                    <Link to="/profile">Go to profile</Link>
                  </li>
                </ul>
              )}
            />
            <Route path="/chat" component={() => <Chat />} />
            <Route path="/profile" component={() => <Profile />} />
            <Route
              path="*"
              component={() => (
                <div>
                  <h1>404, page not found</h1>
                  <Link to="/chat">Go to chat</Link>
                </div>
              )}
            />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById("root"),
);
