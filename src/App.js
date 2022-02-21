//import './App.css';
import React from 'react'; //para evitar escribir div al retornar app
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/* React.Fragment reemplaza DIV - de la etiqueta q conteni todo   */}
      
      <TodoCounter/> 
      <TodoSearch /> 

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text = {todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
       
    </React.Fragment>
  );
}

export default App;
