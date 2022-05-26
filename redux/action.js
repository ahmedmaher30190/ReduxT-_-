export const SET_COUNT = "SET_COUNT"

export const setCount = number => dispatch => {
    dispatch({
        type: SET_COUNT,
        payload: number
    })
}