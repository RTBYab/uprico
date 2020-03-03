import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
    console.log("login-form", email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">ورود</h1>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            placeholder="ایمیل"
            type="email"
            name="email"
            onChange={e => onChange(e)}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder="پسورد"
            type="password"
            name="password"
            onChange={e => onChange(e)}
            value={password}
            required
          />
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="ورود" />
        </div>
        <p className="my-1">
          {" "}
          هنوز ثبت نام نکرده اید؟<Link to="/register">ثبت نام کنید</Link>
        </p>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
