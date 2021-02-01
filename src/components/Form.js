import React from "react";

const Form=  ({setInputText,setTodos,todos,inputText,setFilter}) => {
  //write javascript code and function
  const InputTextHandler = (e) =>{
    // console.log(e.target.value);
    setInputText(e.target.value);
  

  };
  //want to submit it ande create an object with the data
  const submitTodoHandler=(e) =>{
  e.preventDefault();
  setTodos([
    ...todos,
    //we create AN OBJECT
    {text:inputText,completed:false, 
      id:Math.random()*1000}
  ]);
  setInputText("");
};    
const filterHandler=(e)=>{
 setFilter(e.target.value);
}
return(
    
    <form>
 <input value={inputText} 
 onChange={InputTextHandler} 
 type="text" 
className="todo-input" />
      <button onClick = {submitTodoHandler} className="submit-button" type="submit">
      <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;