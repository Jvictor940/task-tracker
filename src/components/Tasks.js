import { useState } from 'react'

const Tasks = () => {
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

    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks;