import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Grid from "../grid/index";
import React, { useEffect, Fragment } from "react";
import { getPosts } from "../../redux/actions/post";
import { getStoreByStoreOwner } from "../../redux/actions/store";

const Dashboard = ({
  getStoreByStoreOwner,
  auth: { user },
  store,
  getPosts
}) => {
  const id = user._id;
  useEffect(() => {
    getPosts(id);
    getStoreByStoreOwner(id);
  }, [getStoreByStoreOwner, getPosts, id]);

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
  auth: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth
});

export default connect(mapStateToProps, { getStoreByStoreOwner, getPosts })(
  Dashboard
);
