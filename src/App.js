import FormComponent from "./components/FormComponent";
import "./App.css";
import React , {useState, useEffect} from "react";
import TodoListComponent from "./components/TodoListComponent";

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [option,setOption]=useState("all");
  const [filtertodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])
  useEffect (()=>{
   filterHandler();
   saveLocalTodos();
  },[todos,option]);

  const saveLocalTodos = () =>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }

 const getLocalTodos = () => {
  if(localStorage.getItem('todos') !== null)
      setTodos(JSON.parse(localStorage.getItem('todos')));
 }
  const filterHandler = () => {
    switch(option)
    {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed == true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed ==false ));
        break;
      default :
        setFilteredTodos(todos);
        break;    
    }
  }
 
  


  return (
    <div className="App">
       <header><h1>
         Nandhini MB's Todo List</h1>
         </header>
         <FormComponent inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} option={option} setOption={setOption} />
         
           <div className="todo-container">
           <ul className="todo-list">

             {
              filtertodos.map((todo) =>  {
                return (
                  <TodoListComponent id={todo.id} todo={todo} todos={todos} setTodos={setTodos} filtertodos={filtertodos}/>
                )
              })
            }
           </ul>
         </div>
              
      
    </div>
  );
}

export default App;
