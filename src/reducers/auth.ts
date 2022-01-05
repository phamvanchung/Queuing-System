import { authAction } from '../models';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

const initialState = {
  user: {},
  isLoggingIn: false,
  isLoggedIn: false
};

const Auth = (state = initialState, action: authAction) => {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default Auth;
