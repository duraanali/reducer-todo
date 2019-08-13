export const initialState = {
    task: 'Finish Reading The Book',
    id: 1528817077286,
    completed: true
};

export const toDoList = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_EDITING':
            return {
                ...state,
                editing: !state.editing
            };
        case 'UPDATE_TITLE':
            return {
                ...state,
                title: action.payload,
                editing: !state.editing
            };
        default:
            return state;
    }
};