import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete,onDClick }) => {
    return (
        <div id="cards" style={{ cursor: 'pointer' }} onDoubleClick={()=>onDClick(task.id)}>

            <span><b>Text :</b> {task.text}</span><br />

            <span><b>Due  :</b> {task.due ? "Assigned" : "No Due Date"} </span><br />

            <hr />

            <b>Description</b>
            <p id="description_job"> <i> {task.desc} </i> </p>

            <hr />

            <FaTimes style={{ color: 'red', marginLeft: 110, cursor: 'pointer' }} onClick={() => onDelete(task.id)} />

        </div>
    )
}

export default Task