// add imports

import { useState } from "react"



const TodoList = ({data}) => {

    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        //addTodo
        setNewTodo('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
            add
            </button>
        </form>


    
    

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {
               data?.map((singleData)=>(
                <article key={singleData.id}>
                    <div className="todo">
                        <input type="checkbox" />
                        <label>{singleData.title}</label>
                    </div>
                    <button className="trash">❌</button>
                </article>
               ))
            }
        </main>
    )
}
export default TodoList