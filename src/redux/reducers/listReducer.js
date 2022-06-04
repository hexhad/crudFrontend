import { ActionTypes } from "../consts/listActionTypes";

const initialState = {
    taskList : [],
};

export const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_TASK:
            return { ...state, taskList:payload };         
        default:
            return state;    
    }
};