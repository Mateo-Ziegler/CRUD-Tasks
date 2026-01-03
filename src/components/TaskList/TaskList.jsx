import {TaskContext} from '../../context/TaskContext'
import {useContext} from 'react'
import { ShowTasks } from './ShowTasks'

export const TaskList = () => {
  const {tasks:data} = useContext(TaskContext)
  
  return (
      <div className='p-6'>
        {data.length > 0 ? <ShowTasks/> : <h2 className='text-3xl text-white font-bold text-center'>No hay tareas aún</h2>}
      </div>
  )
}
