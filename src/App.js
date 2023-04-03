import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment', 
        day: 'April 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School', 
        day: 'April 6th at 1:30pm', 
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping', 
        day: 'April 7th at 12:30pm', 
        reminder: true
    }
])

//Add Task 
const addTask = (task) => {
  // creating random id's since we're not connecting this to a backend
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask]) //updating our state to be able to see old and new task we just created. 
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header title= 'Task Tracker' onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>} {/* shorter way of doing a ternerary if showAddTask do x if not do nothing */} 
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks')}
    </div>
  );
}

export default App;
