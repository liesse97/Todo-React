import React from "react";
//import components
import Todo from './Todo';

const TodoList=({todos,setTodos,choiceTodo})=>{
 

    return (
        <div className="todo-container">
      <ul className="todo-list">
        {choiceTodo.map((todo) => ( 
          <Todo 
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          text ={todo.text} 
         keyid={todo.id}
         />
        ))}
      </ul>
    </div>
    );
};
export default TodoList;