import react from 'react';

const TodoListComponent = ({todo,todos,setTodos,filtertodos}) => {

const deleteHandler =()=>{
setTodos(filtertodos.filter((el) => el.id !== todo.id ));
}

  const completeHandler= () => {
  setTodos(filtertodos.map((el)=>{
    if(el.id === todo.id){
      return {
        ...el,completed:!el.completed
      };
    }
    return el;
  }));
  }

 return (
 <div className="todo">
   <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{todo.text}</li>
   <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
   <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
 </div>

 );
}

export default TodoListComponent;