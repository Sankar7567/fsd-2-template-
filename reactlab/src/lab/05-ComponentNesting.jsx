/*
==============================================================================
Experiment 5.5 : Component Nesting
==============================================================================

Objective
---------
To understand how components can be nested inside other components.

Topics Covered
--------------
✓ Function Component
✓ Class Component
✓ Component Nesting

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import ComponentNesting from "./lab/05-ComponentNesting";

function App() {
    return <ComponentNesting />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

This is Header

Welcome to Component Nesting

This is Footer

==============================================================================
*/

import React, { Component } from "react";

function Header() {
    return (
        <h1>This is Header</h1>
    );
}

class Footer extends Component {
    render() {
        return (
            <h2>This is Footer</h2>
        );
    }
}

function ComponentNesting() {
    return (
        <div>
            <Header />
            <p>Welcome to Component Nesting</p>
            <Footer />
        </div>
    );
}

export default ComponentNesting;