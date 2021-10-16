import unclePark from "../../api/unclePark";

import {
  USER_SIGNUP,
  SET_ERROR,
  USER_SIGNIN,
  GET_MARKERS,
  GET_USER,
  LOGOUT_USER,
  SET_LOADING,
  SET_USER_MARKER,
} from "./types";

// Signup User
export const userSignup = (userData, redirect) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await unclePark.post("/signup", userData);
    dispatch({
      type: USER_SIGNUP,
      payload: data,
    });

    redirect();
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data,
    });
  }
};

// Signin User
export const userSignin = (userData, redirect) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await unclePark.post("/signin", userData);
    dispatch({
      type: USER_SIGNIN,
      payload: data,
    });

    redirect();
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data,
    });
  }
};

// Get User
export const getUser = (token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await unclePark.get("/get-user", config);
    dispatch({
      type: GET_USER,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Logout User
export const logoutUser = (redirect) => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });

  redirect();
};

// Set User Marker
export const setUserMarker = (newLongitude, newLatitude) => (dispatch) => {
  dispatch({
    type: SET_USER_MARKER,
    payload: { newLongitude, newLatitude },
  });
};

// Get Markers
export const getMarkers = () => async (dispatch) => {
  try {
    const { data } = await unclePark.get("/marker");
    dispatch({
      type: GET_MARKERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data,
    });
  }
};
