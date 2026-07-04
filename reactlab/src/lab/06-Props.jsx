/*
==============================================================================
Experiment 6.1 : Props
==============================================================================

Objective
---------
To understand how Props are used to pass data from Parent Component to Child
Component.

Topics Covered
--------------
✓ Props
✓ Parent Component
✓ Child Component

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import PropsDemo from "./lab/06-Props";

function App() {
    return <PropsDemo />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Student Details

Name : Sankar

Course : CSE

==============================================================================
*/

function Student(props) {
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name : {props.name}</p>
            <p>Course : {props.course}</p>
        </div>
    );
}

function PropsDemo() {
    return (
        <div>
            <Student name="Sankar" course="CSE" />
        </div>
    );
}

export default PropsDemo;