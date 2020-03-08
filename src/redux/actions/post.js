import axios from "axios";
import Const from "../../utils/constants";
import { GET_POST, ADD_POST, DELETE_POST, GET_STORE_POST } from "./index";

export const addNewPost = ({ id, title, photo, caption }) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data"
    }
  };
  const fileName = photo.split("/").pop();

  let bodyFormData = new FormData();
  bodyFormData.append("photo", {
    uri: photo,
    name: fileName
  });

  bodyFormData.append("title", title);
  bodyFormData.append("body", caption);

  try {
    const res = await axios.post(
      Const.URL.Main + `post/new/${id}`,
      bodyFormData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const getPosts = id => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.get(Const.URL.Main + `posts/${id}`, config);
    dispatch({
      type: GET_STORE_POST,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const getPost = id => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.get(Const.URL.Main + `post/${id}`, config);
    console.log("popopop", Const.URL.Main + `post/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const updatePost = id => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      "Content=Type": "application/json"
    }
  };
  try {
    const res = await axios.post(Const.URL.Main + ``);
  } catch (e) {}
};

export const deletePost = id => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  try {
    await axios.delete(Const.URL.Main + `posts/${id}`, config);
    dispatch({
      type: DELETE_POST,
      payload: id
    });
  } catch (e) {
    console.log(e);
  }
};
