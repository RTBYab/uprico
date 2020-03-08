import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Const from "../../utils/constants";
import { getPost } from "../../redux/actions/post";
import React, { useEffect, Fragment, useState } from "react";

const Details = ({
  getPost,
  match,
  post: { post, loading },
  getPhoto,
  auth
}) => {
  const { data } = match.params;
  const id = auth.user._id;
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });
  const { title, body } = formData;

  useEffect(() => {
    getPost(data);
  }, [getPost, getPhoto, data]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return post === null || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {post.postedBy._id === id ? (
        <div>
          <form className="form" onSubmit={e => onSubmit(e)} />
          <div className="form-group">
            <input
              name="title"
              defaultValue={post.title}
              onChange={e => onChange(e)}
            />
          </div>
          <img src={Const.URL.Posts + `${id}/${post.photo}`} alt={post.title} />
          <div className="form-group">
            <input
              name="body"
              defaultValue={post.body}
              onChange={e => onChange(e)}
            />
          </div>
        </div>
      ) : (
        <div>
          <img src={Const.URL.Posts + `${id}/${post.photo}`} alt={post.title} />
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost })(Details);
