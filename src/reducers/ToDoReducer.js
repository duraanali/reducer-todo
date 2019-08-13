export const initialState = {
    task: 'Finish Reading The Book',
    id: 1528817077286,
    completed: true
};

export const toDoList = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ITEM':
            return {
                ...state,
                completed: !state.completed
            };
        case 'ADD_ITEM':
            return {
                ...state,
                task: action.payload,
                completed: !state.completed
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                task: action.payload,
                completed: !state.completed
            };
        default:
            return state;
    }
};