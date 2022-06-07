import './css/AddTask.css'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText] = useState('')
    const [desc,setDesc] = useState('')
    const [due,setDue]   = useState(false)
    
    const onSubmit=(e)=>{
        e.preventDefault()

        onAdd({text,desc,due})

        setText('')
        setDesc('')
        setDue(false)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="block">

                <div id="innerblock">

                    <h2 style={{textAlign:'center'}}>Add Task</h2>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Task</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Enter Task" value={text} onChange={(e) => setText(e.target.value)} required />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" placeholder="Enter Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>
                    </div>

                    <input className="form-check-label" type="checkbox" value={due} onChange={(e) => setDue(e.currentTarget.checked)}  /> <small>Check To Make Assigned</small>

                    <div id="submit">
                        <button className="btn btn-primary" type="submit">Save Task</button>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default AddTask