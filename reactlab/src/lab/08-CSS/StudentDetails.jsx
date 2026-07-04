/*
==============================================================================
Experiment 6.3 : CSS Styling
==============================================================================

Objective
---------
To understand how CSS can be applied to React Components.

Topics Covered
--------------
✓ CSS
✓ External Stylesheet
✓ className

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import StudentDetails from "./lab/08-CSS/StudentDetails";

function App() {
    return <StudentDetails />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Student details displayed with CSS styling.

==============================================================================
*/

import "./App.css";

function StudentDetails() {

    return (

        <div className="container">

            <h1>Student Details</h1>

            <p>Name : Sankar</p>

            <p>Course : CSE</p>

        </div>

    );

}

export default StudentDetails;