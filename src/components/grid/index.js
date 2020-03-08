import PropTypes from "prop-types";
import { connect } from "react-redux";
import Const from "../../utils/constants";
import { getPosts } from "../../redux/actions/post";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";

const Grid = ({ store: { store }, auth: { user }, post, getPosts }) => {
  const helperRender = () => {
    if (user._id === store.storeOwner) {
      return <div>Your are the owner</div>;
    }
  };

  return (
    <div>
      <Fragment className="row">
        {post.posts.map(post => (
          <div class="column">
            <Link to={`/details/${post._id}`}>
              <img
                className="grid-image"
                key={post._id}
                src={Const.URL.Posts + `${user._id}/${post.photo}`}
                alt={post.title}
              />
            </Link>
          </div>
        ))}
      </Fragment>
      {helperRender()}
    </div>
  );
};

Grid.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth,
  post: state.post
});
export default connect(mapStateToProps, { getPosts })(Grid);
