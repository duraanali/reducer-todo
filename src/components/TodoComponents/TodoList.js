import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log('map function', props.todoDataInfo)
    return (
        <div>
            {props.todoDataInfo.map(toDo => (
                <Todo key={toDo.id} toDo={toDo} toggleItem={props.toggleItem} deleteToDo={props.deleteToDo} />
            ))}

        </div>
    );
};

export default TodoList;


