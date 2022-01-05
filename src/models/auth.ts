import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants'

interface LoginRequest {
  type: typeof LOGIN_REQUEST
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS,
  payload: string
}

interface LoginFailure {
  type: typeof LOGIN_FAILURE,
  payload: string
}

export type authAction = LoginRequest | LoginSuccess | LoginFailure