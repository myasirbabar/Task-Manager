import Tasks from "./Tasks";
import Header from "./Header";
import Footer from "./Footer";
import AddTask from "./AddTask";
import { useState, useEffect } from "react";


const Home = () => {

    const [tasks, setTasks] = useState([
        /* {
          id: 1,
          text: "Hacker Rank",
          desc: "Daily Do Hacker Rank Practice Questions",
          due: false,
        },
        {
          id: 2,
          text: "React.js",
          desc: "Learn React.js Fastly",
          due: true,
        },
        {
          id: 3,
          text: "Django",
          desc: "Learn Django after React",
          due: true,
        },
        {
          id: 4,
          text: "CN",
          desc: "Computer Networks Slides",
          due: false,
        } */
    ])

    //Toggle AddTask Component
    const [viewAddTask, setViewAddTask] = useState()


    //Fetching Tasks,Add Task Status from Mock Backend i.e Json Server with the help of hook useEffect
    useEffect(() => {
        const setInitState = async () => { //async means it promise to return
            const allTasks = await fetchTasks() //await means it will wait till get response, since it is async func
            setTasks(allTasks)
        }
        setInitState()
    }, []);  //  [] tells it will be called only first time of rendering

    //Fetch Tasks Function
    const fetchTasks = async () => {
        return await (await fetch('http://localhost:5000/tasks')).json()
    }

    //Fetch A single Task Function
    const fetchTask = async (id) => {
        return await (await fetch(`http://localhost:5000/tasks/${id}`)).json()
    }

    //Delete Task
    const DeleteTask = async (id) => {

        await fetch(
            `http://localhost:5000/tasks/${id}`,
            { method: 'DELETE' }
        )

        // setTasks(
        //   tasks.filter((task) =>
        //     task.id !== id
        //   )
        // )

        setTasks(
            await fetchTasks()
        )

    }

    //Update Task Due Status
    const updateDue = async (id) => {
        const task = await fetchTask(id)
        const updated = { ...task, due: !task.due }

        const res = await fetch(
            `http://localhost:5000/tasks/${id}`,
            {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(updated)
            }
        )

        //Either
        //const data = await res.json()
        // setTasks(
        //   tasks.map((task) =>
        //     task.id !== id ? task : { ...task, due: !data.due }
        //   )
        // )

        //OR
        // setTasks(
        //   tasks.map((task) =>
        //     task.id !== id ? task : { ...task, due: !task.due }
        //   )
        // )

        //OR
        setTasks(await fetchTasks())
    }

    //Add Task
    const AddNewTask = async (task) => {

        let id = -1
        tasks.map((task) => id = task.id)
        id += 1
        task.id = id

        const res = await fetch(
            'http://localhost:5000/tasks',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(task)
            }
        )

        //Either
        //setTasks([...tasks, task])

        //OR
        // const data = await res.json()
        // setTasks([...tasks,data])

        //OR
        setTasks(await fetchTasks())

    }

    return (
        <div className="Container">
            <Header currentStatus={viewAddTask} onClickAdd={() => setViewAddTask(!viewAddTask)} />
            
            {viewAddTask && <AddTask onAdd={AddNewTask} />}

            <hr />

            <h3 style={{ textAlign: 'center' }}>All Tasks</h3>

            <Tasks tasks={tasks} onDelete={DeleteTask} onDClick={updateDue} />

            <Footer />
        </div>
    );
}

export default Home;
