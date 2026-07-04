/*
==============================================================================
Experiment 12(b) : Todo List Application
==============================================================================

Objective
---------
To develop a simple Todo List Application using React.

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import TodoApp from "./lab/19-TodoApp/TodoApp";

function App() {
    return <TodoApp />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

==============================================================================
*/

import { useState } from "react";

function TodoApp() {

    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([]);

    const addTask = () => {

        if(task !== ""){

            setTasks([...tasks, task]);

            setTask("");

        }

    };

    return (

        <div>

            <h1>Todo List</h1>

            <input

                type="text"

                value={task}

                onChange={(e) => setTask(e.target.value)}

            />

            <button onClick={addTask}>

                Add

            </button>

            <ul>

                {

                    tasks.map((item,index)=>

                        <li key={index}>

                            {item}

                        </li>

                    )

                }

            </ul>

        </div>

    );

}

export default TodoApp;