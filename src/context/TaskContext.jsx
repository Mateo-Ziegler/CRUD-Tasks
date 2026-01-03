import {createContext, useState, useEffect} from 'react'
import {Tasks as data} from '../Tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {  
  const [tasks, setTasks] = useState([])
  
  const createTask = (title, description) => {
    setTasks((prev) => [...prev, {
      title,
      description,
      id: crypto.randomUUID()
    }])
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((obj) => obj.id !== id))
  }

  useEffect(() => {
    setTasks(data)
  }, [])
  
  return (
    <TaskContext.Provider value={
      {tasks, setTasks, createTask, deleteTask}
    }>
        {props.children}
    </TaskContext.Provider>
  )
}


