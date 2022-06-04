import{ ActionTypes } from '../consts/listActionTypes'

export const setTask = (task) => {
    return {
        type : ActionTypes.SET_TASK,
        payload: task
    }
}

export const getTask = (task) => {
    return {
        type : ActionTypes.GET_TASK,
        payload: task
    }
}

export const removeTask = (task) => {
    return {
        type : ActionTypes.REMOVE_TASK,
        payload: task
    }
}