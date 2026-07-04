/*
==============================================================================
Experiment 5.4 : Class Component
==============================================================================

Objective
---------
To understand how Class Components are created in React.

Topics Covered
--------------
✓ Class Components
✓ render() Method
✓ JSX

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import ClassComponent from "./lab/04-ClassComponent";

function App() {
    return <ClassComponent />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Hello from Class Component

Welcome to React

==============================================================================
*/

import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Class Component</h1>
                <p>Welcome to React</p>
            </div>
        );
    }
}

function ClassComponent() {
    return (
        <div>
            <Welcome />
        </div>
    );
}

export default ClassComponent;