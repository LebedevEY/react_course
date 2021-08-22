import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { Header } from "./components";
import { ThemeProvider } from "./components/ThemeContext";
import { Chat, Profile, Gists } from "./pages";
import { store, persistor } from "./store";

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
      <PersistGate loading={null} persistor={persistor}>
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
                    <li>
                      <Link to="/gists">Go to gists</Link>
                    </li>
                  </ul>
                )}
              />
              <Route path="/chat" component={() => <Chat />} />
              <Route path="/profile" component={() => <Profile />} />
              <Route path="/gists" component={() => <Gists />} />
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
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root"),
);
