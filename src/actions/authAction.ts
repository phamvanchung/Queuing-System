import { Dispatch } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionsType'
import { myFirebase } from '../config';
import { QUEUING } from '../constants'

export const login = (email: string, password: string) => (dispatch: Dispatch<any>) => {
  dispatch({ type: LOGIN_REQUEST })

  myFirebase.auth().signInWithEmailAndPassword(email, password)
    .then(resp => {
      localStorage.setItem(QUEUING, JSON.stringify(resp.user));
      localStorage.setItem("refresh-token", JSON.stringify(resp.user?.refreshToken));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: resp
      });
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, payload: error });
    });
};