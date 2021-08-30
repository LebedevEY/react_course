import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { firebaseApp, db } from "./api/firebase";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { ThemeProvider } from "./components/ThemeContext";
import { Chat, Profile, Gists, SignUp, SignIn } from "./pages";
import { store, persistor } from "./store";

const themes = {
  dark: {
    color: "#4346e0",
  },
  light: {
    color: "#9b9ce0",
  },
};

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return (
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
                    <ul className="home_ul">
                      <li>
                        <Link to="/sign_in">Войти</Link>
                      </li>
                      <li>
                        <Link to="/sign_up">Зарегистрироваться</Link>
                      </li>
                    </ul>
                  )}
                />
                <PublicRoute
                  isAut={session}
                  path="/sign_up"
                  component={() => <SignUp />}
                />
                <PrivateRoute
                  isAut={session}
                  path="/chat"
                  component={() => <Chat />}
                />
                <PrivateRoute
                  isAut={session}
                  path="/profile"
                  component={() => <Profile session={session} />}
                />
                <PrivateRoute
                  isAut={session}
                  path="/gists"
                  component={() => <Gists />}
                />
                <PublicRoute
                  isAut={session}
                  path="/sign_in"
                  component={() => <SignIn />}
                />
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
