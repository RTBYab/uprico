import React, { Fragment, useEffect } from "react";
import "./css/App.css";
import decode from "jwt-decode";
import { Provider } from "react-redux";
import Alert from "./components/alert/";
import store from "./redux/store/store";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/routes/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      const decodedData = decode(localStorage.token);
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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
