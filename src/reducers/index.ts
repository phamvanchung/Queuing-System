import { combineReducers } from "redux";
import Auth from './auth';

const rootReducer = combineReducers({
  Auth
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
