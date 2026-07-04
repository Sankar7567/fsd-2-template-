/*
==============================================================================
Experiment 7.2 : Rendering Lists
==============================================================================

Objective
---------
To understand how to render lists using the map() function.

Topics Covered
--------------
✓ Arrays
✓ map()
✓ List Rendering

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import ListRendering from "./lab/12-ListRendering";

function App() {
    return <ListRendering />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

Expected Output
---------------

Apple

Banana

Orange

Mango

==============================================================================
*/

function ListRendering() {

    const fruits = [

        "Apple",

        "Banana",

        "Orange",

        "Mango"

    ];

    return (

        <div>

            <h1>Fruit List</h1>

            <ul>

                {

                    fruits.map((fruit,index)=>

                        <li key={index}>

                            {fruit}

                        </li>

                    )

                }

            </ul>

        </div>

    );

}

export default ListRendering;