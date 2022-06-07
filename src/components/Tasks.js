import './css/Tasks.css'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onDClick }) => {
    return (
        <div id="mainArea">
            
            {//Logic Tags
                tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task key={task.id} task={task} onDelete={onDelete} onDClick={onDClick} />
                    ))
                )
                    : (<h1>No Tasks To Show</h1>)
            }
        </div>
    )
}
export default Tasks