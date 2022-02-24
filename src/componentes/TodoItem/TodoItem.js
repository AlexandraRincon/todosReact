import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        // Estructura ben para usar css sin "" - Entonces tome esos estilos de ICON y ICONCHECK
        // Y si el props se vuelve tru (complited) &&  haga ICON-CHECK-ACTIVE
      >
        √
      </span>
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <span className="Icon Icon-delete">
        X
      </span>


    </li>
  );
}
export { TodoItem };
