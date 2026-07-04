/*
==============================================================================
Experiment 7.3 : React Forms
==============================================================================

Objective
---------
To understand how to work with form fields using React.

Topics Covered
--------------
✓ Forms
✓ useState
✓ onChange
✓ onSubmit

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import FormsDemo from "./lab/13-Forms";

function App() {
    return <FormsDemo />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Enter Name

Submit

After submission:

Hello Sankar

==============================================================================
*/

import { useState } from "react";

function FormsDemo() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        alert("Hello " + name);

    };

    return (

        <form onSubmit={handleSubmit}>

            <label>Name : </label>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <button type="submit">

                Submit

            </button>

        </form>

    );

}

export default FormsDemo;