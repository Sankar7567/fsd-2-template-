/*
==============================================================================
Experiment 8.2 : Updating the Screen
==============================================================================

Objective
---------
To understand how React updates the UI when State changes.

Topics Covered
--------------
✓ useState
✓ Screen Updating
✓ React Rendering

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import StateUpdates from "./lab/15-StateUpdates";

function App() {
    return <StateUpdates />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Current Time

Refresh Button

Time updates whenever the button is clicked.

==============================================================================
*/

import { useState } from "react";

function StateUpdates() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {

        setTime(new Date().toLocaleTimeString());

    };

    return (

        <div>

            <h2>{time}</h2>

            <button onClick={updateTime}>

                Refresh Time

            </button>

        </div>

    );

}

export default StateUpdates;