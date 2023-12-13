import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState(()=>{
    const localVal =localStorage.getItem("ITEM");
    if(localVal===null) return []
    return JSON.parse(localVal)

  });



  useEffect(()=>{
    localStorage.setItem("ITEM",JSON.stringify(todo))
  },[todo])

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodo((curr) => {
      return [
        ...curr,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });

    setItem("");
  };
  console.log(todo);

  
  const toggleTodo = (id,completed)=>{
    setTodo((currTodo)=>{
      return currTodo.map((todo)=>{
        if(todo.id===id){
          return {...todo,completed}
        }
        return todo;
      })
    })

  }


function deleteTodos(id) {

  setTodo(currentTodo=>{
    return currentTodo.filter(todos=>todos.id!==id)
  })
  
}

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>To-Do List</h1>
      <ul className="list">
        {todo.length===0 && <h2>No ToDo's</h2>}
        {todo.map((curr) => {
          return (
            <li key={curr.id}>
              <label>
                <input type="checkbox" checked={curr.completed} 
                onChange={(e)=>toggleTodo(curr.id,e.target.checked)}
                />
                {curr.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodos(curr.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
