import React, { useState } from 'react'
import './App.css'

function App() {
    const AddItem = () => {
        console.log(toDo)
        setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
    }
    const [toDos, setTodos] = useState([])// Store Datas using Array
    const [toDo, SetTodo] = useState("") //Input box value Store
    return (
        <div className='App'>
            <div className="todo">
                <h2>TODO LIST</h2>
                <div className="add_option">
                    <input value={toDo} type="text" onChange={(e) => SetTodo(e.target.value)} placeholder='Search name...' />
                    <button onClick={AddItem}>Add todo</button>
                </div>
                {toDos.map((value) => {
                    return (
                        <>
                            <div className='todo_option'>
                                <p>{value.text}</p>
                                <input type="checkbox" onChange={(e) => console.log(e.target.value, console.log(value))} value={value.status} name="" id="" />
                                <button>Remove</button>
                                {
                                    console.log(value.status)
                                }
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default App;