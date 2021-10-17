import { createAction } from "@reduxjs/toolkit"


export const addTask = createAction('ADD_TASK', (id, title) => ({
        payload: {
            id,
            title
        }
}))
    
export const removeTask = createAction('REMOVE_TASK')

export const editTask = createAction('EDIT_TASK', (id, title) => ({
    payload: {
        id,
        title
    }
}))

export const initTodos = createAction('INIT_TASK')

export const asynkInitTodos = () => {
    return function (dispatch) {
         fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
            .then(response => response.json())
             .then(json => dispatch(initTodos(json)))
             .catch((error) => { console.log(error) })
    }
}
    

