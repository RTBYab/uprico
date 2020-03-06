import {
  CREATE_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  ADD_NEW_COMMENT,
  GET_STORE_COMMENTS,
  UPLOAD_STORE_IMAGE,
  UPDATE_STORE_DETAILS,
  GET_STORE_BY_OWNER_ID,
  GET_STORE_PROFILE_PHOTO
} from "./index";
import axios from "axios";
import consts from "../../utils/constants";
// import { setAlert } from "../actions/alert";

export const getStoreByStoreOwner = id => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get(
      consts.URL.Main + `/store/storeOwner/${id}`,
      config
    );

    dispatch({
      type: GET_STORE_BY_OWNER_ID,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};
