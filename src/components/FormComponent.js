import React from 'react';

const FormComponent=({inputText,setInputText,todos,setTodos, option, setOption}) => {


    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{text:inputText, completed:false , id:Math.random()}])
        setInputText("");
    }

    const optionHandler = (e) => {
       setOption(e.target.value);
    }

    return(
        <form>
        <input  value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button  onClick={submitTodoHandler} className="todo-button" type="submit" >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={optionHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default FormComponent;