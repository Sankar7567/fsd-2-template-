/*
==============================================================================
Experiment 7.1 : Conditional Rendering
==============================================================================

Objective
---------
To understand Conditional Rendering in React.

Topics Covered
--------------
✓ if-else
✓ Ternary Operator
✓ Conditional Rendering

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import ConditionalRendering from "./lab/11-ConditionalRendering";

function App() {
    return <ConditionalRendering />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Welcome User

(or)

Please Login

==============================================================================
*/

function ConditionalRendering() {

    const isLoggedIn = true;

    return (

        <div>

            {

                isLoggedIn ?

                <h1>Welcome User</h1>

                :

                <h1>Please Login</h1>

            }

        </div>

    );

}

export default ConditionalRendering;