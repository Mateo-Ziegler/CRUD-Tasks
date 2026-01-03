import {TaskContext} from '../../context/TaskContext'
import {useContext} from 'react'
export function ShowTasks() {
    const {tasks:data, deleteTask} = useContext(TaskContext)
    return (
        <div className=' grid grid-cols-4 gap-5'>
        {data.map((t) => (
                <div key={t.id} className='bg-gray-800 text-white p-4 rounded-md'>
                    <h1 className='text-xl font-bold capitalize'>{t.title}</h1>
                    <p className='text-gray-500'>{t.description}</p>
                    <button onClick={() => deleteTask(t.id)} className="bg-red-700 p-2 rounded mt-4 hover:bg-red-500 cursor-pointer">Eliminar Tarea</button>
                </div>))}
        </div>
    )
}

