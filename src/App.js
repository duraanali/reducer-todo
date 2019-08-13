import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './components/TodoComponents/TodoForm';
import { initialState, toDoList } from './reducers/ToDoReducer';

const App = () => {
  const [todoData, setTodoData] = useState();

  const [state, dispatch] = useReducer(toDoList, initialState);
  console.log('state from reducer:', state);

  const toggleItem = id => {

    setTodoData({
      todoData: todoData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  const addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: true
    };

    setTodoData({
      todoData: [...todoData, newItem]
    });
  };

  const deleteToDo = () => {
    setTodoData({
      todoData: todoData.filter(toDo => toDo.completed)
    });
  };


  return (
    <div className="app">
      <h2 className="text-center m-3">To-Do List App</h2>

      <div className="container">
        <TodoForm addItem={addItem} />
        <TodoList todoDataInfo={todoData} toggleItem={toggleItem} deleteToDo={deleteToDo} />
      </div>
    </div>
  );
}

export default App;
