import React, { useState } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoForm from './components/TodoComponents/TodoForm';


const App = () => {
  const [todoData, setTodoData] = useState([
    {
      task: 'Finish Reading The Book',
      id: 1528817077286,
      completed: true
    },
    {
      task: 'Get Groceries',
      id: 152888,
      completed: true
    }
  ]);

  console.log(todoData)

  const toggleItem = id => {
    console.log('toggle:', toggleItem)
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
    console.log('Add Item:', addItem)
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
