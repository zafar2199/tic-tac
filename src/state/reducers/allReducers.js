import { combineReducers } from 'redux';
import boardReduser from "./boardReducer";
import turnReducer from "./turnReducer";
import winnerReducer from "./winnerReducer";

// hammasini bir yerga yenglab beradi
const allReducers = combineReducers({
  board: boardReduser,
  turn: turnReducer,
  winner: winnerReducer
})

export default allReducers;