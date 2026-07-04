/*
==============================================================================
Experiment 6.2 : State (useState Hook)
==============================================================================

Objective
---------
To understand how State is used to store and update data in React.

Topics Covered
--------------
✓ useState Hook
✓ State
✓ Updating State

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import StateDemo from "./lab/07-State";

function App() {
    return <StateDemo />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Count : 0

[Increment Button]

Clicking the button increases the count.

==============================================================================
*/

import { useState } from "react";

function StateDemo() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h2>Count : {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>

    );

}

export default StateDemo;