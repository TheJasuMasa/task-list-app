import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    return (
        <div className ={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <div className ='task-description'>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <div className='delete-button-wrapper'>
                <FaTimes className = 'delete-button' onClick={()=>onDelete(task.id)}/>
            </div>
        </div>
    )
}

export default Task
