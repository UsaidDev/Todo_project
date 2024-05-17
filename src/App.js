import React, { useState } from 'react'
import './App.css'

function App() {
    const AddItem = () => {
        SetTodo("")
        setTodos([...toDos, { id: Date.now(), text: toDo}])
    }

    const [toDos, setTodos] = useState([])// Store Datas using Array
    const [toDo, SetTodo] = useState(""); //Input box value Store

    const handleDelete=(id)=>{
        const RemoveItem = toDos.filter((todo)=>{
            return todo.id !== id;//Delete Data in an Array
        })
        setTodos(RemoveItem);
    }
    return (
        <div className='App'>
            <div className="todo">
                <h2>TODO LIST</h2>
                <div className="add_option">
                    <input value={toDo} type="text" onChange={(e) => SetTodo(e.target.value)} placeholder='Search name...' />
                    <button onClick={AddItem}>Add todo</button>
                </div>
                {toDos.map((obj,index) => {
                    return (
                        <>
                            <div className='todo_option' key={index}>
                                <p>{obj.text}</p>
                                <button onClick={()=>handleDelete(obj.id)}>Remove</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default App;