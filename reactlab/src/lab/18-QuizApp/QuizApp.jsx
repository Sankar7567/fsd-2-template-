/*
==============================================================================
Experiment 12(a) : Quiz Application
==============================================================================

Objective
---------
To develop a simple Quiz Application using React.

Execution
---------
1. Open:

   src/App.js

2. Replace App.js with:

--------------------------------------------------

import QuizApp from "./lab/18-QuizApp/QuizApp";

function App() {
    return <QuizApp />;
}

export default App;

--------------------------------------------------

3. Save App.js

4. Run:

   npm start

==============================================================================
*/

import { useState } from "react";

function QuizApp() {

    const [score, setScore] = useState(0);

    const checkAnswer = (correct) => {

        if(correct){

            setScore(score + 1);

            alert("Correct Answer");

        }

        else{

            alert("Wrong Answer");

        }

    };

    return (

        <div>

            <h1>Quiz App</h1>

            <h2>Score : {score}</h2>

            <p>React is developed by?</p>

            <button onClick={() => checkAnswer(true)}>

                Facebook

            </button>

            <button onClick={() => checkAnswer(false)}>

                Google

            </button>

        </div>

    );

}

export default QuizApp;