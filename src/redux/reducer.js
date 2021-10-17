import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit"


const tasks = createReducer([], {   
    "ADD_TASK": (state, { payload }) => [...state, payload],
    "REMOVE_TASK": (state, { payload }) => [...state].filter(task => task.id !== payload),
    "EDIT_TASK": (state, { payload }) => [...state].map(task => {
                if (task.id === payload.id) {
                    return {...task, title: payload.title}
                }
                return task
    }),
    "INIT_TASK": (state, { payload }) => [...state, ...payload],
})

const rootReducer = combineReducers({tasks})

export default rootReducer