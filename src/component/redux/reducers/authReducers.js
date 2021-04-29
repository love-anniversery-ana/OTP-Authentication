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

export const userNumberReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_NUMBER_REQUEST:
      return { loading: true };
    case USER_NUMBER_SUCCESS:
      return {
        loading: false,
        username: action.payload.data.user.username,
        numSuccess: action.payload.success,
        numberMsg: action.payload.msg,
        isNew: action.payload.data.is_new,
      };
    case USER_NUMBER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_VERIFY_REQUEST:
      return { loading: true };
    case USER_VERIFY_SUCCESS:
      if (action.payload.code === 200) {
        sessionStorage.setItem(
          'jwtToken',
          action.payload.data.token.access_token
        );
        return {
          loading: false,
          verSuccess: action.payload.success,
          verifyMsg: action.payload.msg,
        };
      } else {
        return {
          loading: false,
          verSuccess: action.payload.success,
          verifyMsg: action.payload.msg,
        };
      }

    case USER_VERIFY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userResendReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RESEND_REQUEST:
      return { loading: true };
    case USER_RESEND_SUCCESS:
      return {
        loading: false,
        resendMsg: action.payload.msg,
        resSuccess: action.payload.success,
      };
    case USER_RESEND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
