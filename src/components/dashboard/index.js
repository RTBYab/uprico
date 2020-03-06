import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Grid from "../grid";
import React, { useEffect, Fragment } from "react";
import { getStoreByStoreOwner } from "../../redux/actions/store";

const Dashboard = ({ getStoreByStoreOwner, auth: { user }, store }) => {
  const id = user._id;
  useEffect(() => {
    getStoreByStoreOwner(id);
  }, [getStoreByStoreOwner, id]);

  return store.loading && store === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">فروشگاه من</h1>
      <p className="lead">
        <i className="fas fa-user"></i> {user && user.name} خوش آمدید
      </p>

      {store.store !== null ? <Grid /> : <Fragment>hasnot</Fragment>}
    </Fragment>
  );
};
Dashboard.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth
});

export default connect(mapStateToProps, { getStoreByStoreOwner })(Dashboard);
