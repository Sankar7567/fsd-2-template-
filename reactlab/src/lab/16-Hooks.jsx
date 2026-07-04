/*
==============================================================================
Experiment 9.1 : React Hooks
==============================================================================

Objective
---------
To understand the importance of Hooks in React.

Topics Covered
--------------
✓ Hooks
✓ useState
✓ Functional Components

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import HooksDemo from "./lab/16-Hooks";

function App() {
    return <HooksDemo />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Counter

Count : 0

Increment Button

==============================================================================
*/

import { useState } from "react";

function HooksDemo() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h1>React Hooks</h1>

            <h2>Count : {count}</h2>

            <button onClick={() => setCount(count + 1)}>

                Increment

            </button>

        </div>

    );

}

export default HooksDemo;