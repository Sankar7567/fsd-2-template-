/*
==============================================================================
Experiment 9.2 : Sharing Data Between Components
==============================================================================

Objective
---------
To understand how data is shared from Parent Component to Child Component.

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

import SharingData from "./lab/17-SharingData/SharingData";

function App() {
    return <SharingData />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Parent Component

Child Component

Name : Sankar

==============================================================================
*/

import Child from "./Child";

function SharingData() {

    return (

        <div>

            <h1>Parent Component</h1>

            <Child name="Sankar" />

        </div>

    );

}

export default SharingData;