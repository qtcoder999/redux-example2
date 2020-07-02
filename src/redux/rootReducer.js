import { combineReducers } from "redux"

import { countReducer } from "../containers/reducers";

export const rootReducer = combineReducers({

    count: countReducer

})

export default rootReducer;