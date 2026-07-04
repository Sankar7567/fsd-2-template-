/*
==============================================================================
Experiment 5.3 : Function Components
==============================================================================

Objective
---------
To understand how Function Components are created and used in React.

Topics Covered
--------------
✓ Function Components
✓ Component Reusability
✓ JSX

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import FunctionComponents from "./lab/03-FunctionComponents";

function App() {
    return <FunctionComponents />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

This is Header Component

Welcome to React Components

This is Footer Component

==============================================================================
*/

function Header() {
    return (
        <h1>This is Header Component</h1>
    );
}

function Footer() {
    return (
        <h2>This is Footer Component</h2>
    );
}

function FunctionComponents() {
    return (
        <div>
            <Header />
            <p>Welcome to React Components</p>
            <Footer />
        </div>
    );
}

export default FunctionComponents;