/*
==============================================================================
Experiment 8.1 : React Router
==============================================================================

Objective
---------
To understand routing between different pages using React Router.

Topics Covered
--------------
✓ BrowserRouter
✓ Routes
✓ Route
✓ Link

Execution
---------
1. Install (Only Once)

   npm install react-router-dom

2. Open:

   src/App.js

3. Replace App.js with:

--------------------------------------------------

import RouterDemo from "./lab/14-ReactRouter/RouterDemo";

function App() {
    return <RouterDemo />;
}

export default App;

--------------------------------------------------

4. Save App.js

5. Run:

   npm start

Expected Output
---------------

Home

About

Clicking each link navigates to the respective page.

==============================================================================
*/

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";

import About from "./About";

function RouterDemo() {

    return (

        <BrowserRouter>

            <nav>

                <Link to="/">Home</Link>

                {" | "}

                <Link to="/about">About</Link>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

            </Routes>

        </BrowserRouter>

    );

}

export default RouterDemo;