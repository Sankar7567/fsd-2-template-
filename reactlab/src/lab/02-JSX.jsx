/*
==============================================================================
Experiment 5.2 : JSX (JavaScript XML)
==============================================================================

Objective
---------
To understand JSX and how JavaScript expressions can be embedded inside HTML.

Topics Covered
--------------
✓ JSX
✓ JavaScript Expressions
✓ Variables
✓ Curly Braces {}
✓ JSX Rules

Prerequisites
-------------
✓ React Environment Setup
✓ Basic knowledge of JavaScript Variables

Folder
------
src/lab/02-JSX.jsx

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import JSXDemo from "./lab/02-JSX";

function App() {
    return <JSXDemo />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Open Terminal

5. Run:

   npm start

6. Browser:

   http://localhost:3000

Expected Output
---------------

Hello JSX

This is my first JSX program

Name : Sankar

Course : CSE

Concept
-------
JSX stands for JavaScript XML.

JSX allows us to write HTML inside JavaScript.

JavaScript variables and expressions are displayed
inside JSX using curly braces { }.

Example:

const name = "Sankar";

<h1>{name}</h1>

Workflow
--------

JavaScript Variable

        │

        ▼

Embedded using { }

        │

        ▼

React converts JSX

        │

        ▼

Browser displays HTML

Important JSX Rules
-------------------

1. JSX must return only ONE root element.

✔ Correct

<div>
    ...
</div>

✘ Wrong

<h1>Hello</h1>
<p>World</p>

---------------------------------------------------

2. Use className instead of class.

HTML

<div class="box">

React

<div className="box">

---------------------------------------------------

3. Every tag must be closed.

✔ Correct

<br />

<input />

<img />

---------------------------------------------------

4. JavaScript expressions must be inside { }

Example

{name}

{10 + 20}

{age >= 18 ? "Adult" : "Minor"}

Common Errors
-------------

1. Returning multiple root elements

2. Forgetting curly braces around variables

3. Using class instead of className

4. Forgetting to close tags like <br />

Common Viva Questions
---------------------

Q1. What is JSX?

JSX stands for JavaScript XML.
It allows HTML to be written inside JavaScript.

------------------------------------------------------

Q2. Why do we use JSX?

It makes UI development easier and more readable.

------------------------------------------------------

Q3. How do we display JavaScript variables in JSX?

Using curly braces.

Example:

{name}

------------------------------------------------------

Q4. Can JSX contain JavaScript expressions?

Yes.

Example:

{10 + 20}

{name.toUpperCase()}

==============================================================================

*/

function JSXDemo() {

    const name = "Sankar";
    const course = "CSE";

    return (

        <div>

            <h1>Hello JSX</h1>

            <p>This is my first JSX program</p>

            <p>
                Name : {name}
                <br />
                Course : {course}
            </p>

        </div>

    );

}

export default JSXDemo;