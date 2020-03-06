import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLink = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
        </a>
      </li>
      <li>
        <Link to="/dashboard">کسب وکار من</Link>
      </li>
    </ul>
  );

  const guestLink = (
    <ul>
      <li>
        <Link to="/register">ثبت فروشگاه</Link>
      </li>
      <li>
        <Link to="/hi">ثبت منتقد</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">اپریکو</Link>
      </h1>
      {<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>}
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
