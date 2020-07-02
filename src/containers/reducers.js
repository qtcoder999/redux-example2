import { INCREMENT, DECREMENT } from "./constants";

const INITIAL_STATE = {
    counter: 0
}

export function countReducer(state = INITIAL_STATE, action) {
    // console.log(state)
    switch (action.type) {
        case INCREMENT: {

            let newState = { ...state };

            newState.counter++;

            return newState;

        }
        case DECREMENT: {

            let newState = { ...state };

            newState.counter--;

            return newState;

        }

        default: return state

    }

}