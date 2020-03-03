import React, { Fragment, useEffect } from "react";
import "./css/App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Alert from "./components/alert/";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import decode from "jwt-decode";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      const decodedData = decode(localStorage.token);
      console.log("dddddd", decodedData._id);
      store.dispatch(loadUser(decodedData._id));
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
