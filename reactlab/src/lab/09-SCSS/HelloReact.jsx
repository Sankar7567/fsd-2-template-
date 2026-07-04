/*
==============================================================================
Experiment 6.3 : SCSS Styling
==============================================================================

Objective
---------
To understand how SCSS can be applied to React Components.

Topics Covered
--------------
✓ SCSS
✓ External Stylesheet
✓ className

Execution
---------
1. Install SCSS (Only Once)

   npm install sass

2. Open:

   src/App.js

3. Replace App.js with:

--------------------------------------------------

import HelloReact from "./lab/09-SCSS/HelloReact";

function App() {
    return <HelloReact />;
}

export default App;

--------------------------------------------------

4. Save App.js

5. Run:

   npm start

Expected Output
---------------

Hello React displayed with SCSS styling.

==============================================================================
*/

import "./App.scss";

function HelloReact() {

    return (

        <div className="container">

            <h1>Hello React</h1>

            <p>Welcome to SCSS Styling</p>

        </div>

    );

}

export default HelloReact;