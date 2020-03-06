import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Grid = ({ store: { store }, auth: { user } }) => {
  const helperRender = () => {
    if (user._id === store.storeOwner) {
      return <div>Your are the owner</div>;
    }
  };
  return (
    <Fragment className="row">
      <div className="column">Hi</div>
      <div className="column">Hello</div>
      <div className="column">{store.address}</div>
      {helperRender()}
    </Fragment>
  );
};

Grid.propTypes = {
  auth: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth
});
export default connect(mapStateToProps, null)(Grid);
