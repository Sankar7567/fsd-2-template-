/*
==============================================================================
Experiment 6.4 : Responding to Events
==============================================================================

Objective
---------
To understand Event Handling in React.

Topics Covered
--------------
✓ Events
✓ onClick
✓ Event Handler Functions

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import EventsDemo from "./lab/10-Events";

function App() {
    return <EventsDemo />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Click Me Button

After clicking:

Button Clicked!

==============================================================================
*/

function EventsDemo() {

    function showMessage() {

        alert("Button Clicked!");

    }

    return (

        <div>

            <h1>React Events</h1>

            <button onClick={showMessage}>

                Click Me

            </button>

        </div>

    );

}

export default EventsDemo;