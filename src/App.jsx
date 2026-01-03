import TaskForm from "./components/TaskForm"
import { TaskList } from "./components/TaskList/TaskList"

function App() {

  return (
    <>
    <main className="bg-gray-950 min-h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
    </>
  )
}

export default App
