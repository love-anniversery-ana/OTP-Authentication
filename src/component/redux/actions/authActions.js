import {
  USER_NUMBER_REQUEST,
  USER_NUMBER_SUCCESS,
  USER_NUMBER_FAIL,
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  USER_VERIFY_FAIL,
  USER_RESEND_REQUEST,
  USER_RESEND_SUCCESS,
  USER_RESEND_FAIL,
  USER_LOGOUT,
} from '../constants/authConstants';
import AXIOS from '../../helpers/axios/axios';
import handleAxiosErrors from '../../helpers/axios/handleAxiosErrors';
import URLS from "../../helpers/url/login.json"

export const phoneInput = (username) => async (dispatch) => {
  try {
    dispatch({
      type: USER_NUMBER_REQUEST,
    });
    const { data } = await AXIOS.post(`${URLS.SEND_NUM}`, { username });
    dispatch({
      type: USER_NUMBER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_NUMBER_FAIL,
      payload: error.response,
    });
    handleAxiosErrors(error);
  }
};

export const codeVerify = (username, code) => async (dispatch) => {
  try {
    dispatch({
      type: USER_VERIFY_REQUEST,
    });
    const { data } = await AXIOS.post(`${URLS.VALIDATE_CODE}`, {
      username,
      code,
    });
    dispatch({
      type: USER_VERIFY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_VERIFY_FAIL,
      payload: error.response,
    });
    handleAxiosErrors(error);
  }
};

export const codeResend = (username) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESEND_REQUEST,
    });
    const { data } = await AXIOS.post(`${URLS.RESEND_CODE}`, { username });
    dispatch({
      type: USER_RESEND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_RESEND_FAIL,
      payload: error.response,
    });
    handleAxiosErrors(error);
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem('jwtToken');
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/login';
};
