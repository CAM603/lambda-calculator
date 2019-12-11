import React, { useState } from "react";
import "./App.scss";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import { numbers, operators, specials } from "./data";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [numberState, setNumberState] = useState(numbers);
  const [screenState, setScreenState] = useState(0)

  const calculator = {
    num1 : null,
    num2 : null,
    operator : '',
    calculate() {
      return this.operator === '+' ? +this.num1 + +this.num2
      : this.operator === '-' ? this.num1 - this.num2
      : this.operator === 'x' ? this.num1 * this.num2
      : this.operator === '/' ? this.num1 / this.num2
      : console.log('You broke me')
    }
  }
  
  let screen = screenState; 

  // Make first number appear on screen
  const something = (event) => {
    if (screen === 0) {
      setScreenState(event.target.textContent)
    } else {
      setScreenState(screen += event.target.textContent)
    }
  }
  // Operator button adds screen value to calculator object
  const operate = (event) => {
    if (event.target.textContent !== "=") {
      calculator.num1 = screen
      calculator.operator = event.target.textContent
      screen = ''
    } else {
      calculator.num2 = screen
      setScreenState(calculator.calculate())
    }
    console.log(calculator)
  }
  // event.target.textContent === "+" ? setScreenState()
  // : event.target.textContent === "-" ? console.log('minus')
  // : event.target.textContent === "x" ? console.log('multiply')
  // : event.target.textContent === "/" ? console.log('divide')
  // : console.log('damn')
  
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      <Display screen={screen}/>
      <Numbers 
      numbers={numbers}
      something={something}
      />
      <Operators 
      operators={operators}
      operate={operate}
      />
      <Specials specials={specials} />
      </div>
    </div>
  );
}

export default App;
