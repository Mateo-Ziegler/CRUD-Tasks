import {TaskContext} from '../context/TaskContext'
import { useState, useContext } from "react"

function TaskForm() {
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

    const {createTask} = useContext(TaskContext)

    return (
            <div className='max-w-md mx-auto'>
                <form className='bg-slate-800 p-10 mb-4 rounded-2xl' onSubmit={(e) => {
                e.preventDefault()
                if(!title.trim() || !description.trim()) {
                    alert("Debes añadir un título y una descripción.")
                    return
                }
                
                createTask(title, description)
                setTitle("")
                setDescription("")
            }}>
                <h1 className='text-white text-2xl font-bold mb-3'>Crea tu tarea</h1>
                <input placeholder="Ingrese su tarea" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>

                <textarea placeholder="Ingrese una descripción" value={description} onChange={(e) => setDescription(e.target.value)}  className='bg-slate-300 p-3 w-full mb-2'></textarea>

                <button className='bg-indigo-500 px-2 py-1 text-center text-white mt-2 hover:bg-indigo-400 cursor-pointer'>Crear Tarea</button>
            </form>
            </div>
    )
}

export default TaskForm
