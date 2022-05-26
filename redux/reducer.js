import { SET_COUNT } from "./action";

const number = 0;
function CounterReducer(state = number,  action){
    switch (action.type) {
        case SET_COUNT:
            state =action.payload
        default:
            return state;
    }
}
export default CounterReducer;