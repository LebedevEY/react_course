import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { Header } from "./components";
import { ThemeProvider } from "./components/ThemeContext";
import { Chat } from "./pages";
import { Profile } from "./pages/Profile";
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
  <React.StrictMode>
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
                    <a href={"/chat"}>Go to chat</a>
                  </li>
                  <li>
                    <a href="#">Go to profile</a>
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
                  <a href={"/chat"}>Go to chat</a>
                </div>
              )}
            />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
