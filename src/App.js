import './App.css';
import React,{useState,useEffect} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {

 //state stuff
  //setInputTextis the function that update the inputText
  const[inputText,setInputText]= useState("");
  const[todos,setTodos] = useState([]);
  const[filter,setFilter]= useState('all');
  const[choiceTodo,setChoiceTodo]=useState([]); 

  //Run once when the app start
  useEffect(()=>{
    saveLocalStore();
  },[])

  //Use Effect
useEffect(()=>
{
 ChoiceTodoHandler();
 lokalStoreTodo();
},[todos,filter]);
  //Functions
  const ChoiceTodoHandler=()=>{
    switch(filter){
      case'completed':
      setChoiceTodo(todos.filter(todo=> todo.completed===true));
      break;
      case'uncompleted':
      setChoiceTodo(todos.filter(todo=> todo.completed===false));
      break;
      default:
        setChoiceTodo(todos);
        break;
    }
  }
  //save to local storage
  const lokalStoreTodo =()=>{
    //adding things to the local storage
  localStorage.setItem('todos',JSON.stringify(todos));
};

const saveLocalStore=()=>{
  //checking if we have something or if we don't
if (localStorage.getItem('todos') === null){
  localStorage.setItem('todos',JSON.stringify([]));
} else{
  //if we do have something, get it
  let setItem = JSON.parse(localStorage.getItem("todos"));
  // and push it to the state
  setTodos(setItem);
}
}

  return (
    <div className="App">
      <header>
    <h1>Todo List </h1>
</header>
<Form 
inputText={inputText}
todos={todos} 
setTodos={setTodos}  
setInputText={setInputText}
setFilter={setFilter} 

/>

<TodoList setTodos={setTodos}
 todos={todos} choiceTodo={choiceTodo} />
    </div>
  );
};

export default App;
