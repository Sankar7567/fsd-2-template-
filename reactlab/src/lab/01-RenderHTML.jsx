/*
==============================================================================
Experiment 5.1 : Render HTML in React
==============================================================================

Objective
---------
Learn how to render HTML elements using a React Function Component.

Topics Covered
--------------
✓ React Function Component
✓ JSX Return Statement
✓ Rendering HTML

Prerequisites
-------------
✓ React Project created
✓ npm packages installed

How to Execute
--------------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import RenderHTML from "./lab/01-RenderHTML";

function App() {
    return <RenderHTML />;
}

export default App;

--------------------------------------------------

3. Save the file.

4. Run the project (if not already running):

   npm start

5. Browser:

   http://localhost:3000

Expected Output
---------------
Hello World

Concept
-------
A React component is simply a JavaScript function
that returns JSX (HTML-like syntax).

Common Viva Questions
---------------------
Q1. What is React?

A JavaScript library used for building User Interfaces.

------------------------------------------------------

Q2. What is a Function Component?

A JavaScript function that returns JSX.

------------------------------------------------------

Q3. Why do we export the component?

To make it available for import in App.js.

==============================================================================
*/

function RenderHTML() {
    return (
        <h1>Hello World</h1>
    );
}

export default RenderHTML;