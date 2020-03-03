import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLink = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <span className="hide-sm">خروج</span>
          <i className="fas fa-sign-out-alt"></i>{" "}
        </a>
      </li>
    </ul>
  );

  const guestLink = (
    <ul>
      <li>
        <NavLink to="/register">ثبت فروشگاه</NavLink>
      </li>
      <li>
        <NavLink to="hi">ثبت منتقد</NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/">اپریکو</NavLink>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
      )}
    </nav>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
