import './App.css';
import React from "react"; //para evitar escribir div al retornar app
import { TodoCounter } from "./componentes/TodoCounter/TodoCounter";
import { TodoSearch } from "./componentes/TodoSearch/TodoSearch";
import { TodoList } from "./componentes/TodoList/TodoList";
import { TodoItem } from "./componentes/TodoItem/TodoItem";
import { CreateTodoButton } from "./componentes/CreateTodoButton/CreateTodoButton";
import logo from "./Imagenes/Logo.png"

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar curso React", completed: true },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <div className="TodoApp">
      {/* <React.Fragment> */}
      {/* React.Fragment reemplaza DIV - no se puede dar estilos   */}
     
      <div className='TodoAppIMG'>
       <img src={logo} alt="Logo"/>
      </div>
      
      <div className="TodoAppContent">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>

      {/* </React.Fragment> */}
    </div>
  );
}

export default App;
