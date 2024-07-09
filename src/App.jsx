import Header from "./Components/header"
import UserInput from "./Components/UserInputs"
import Results from "./Components/Results"
import { useState } from "react"


function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:10200,
    expectedReturn:6,
    duration:10
  })
  const inputIsValid = userInput.duration >= 1
  function handleChange(userIdentifier , newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [userIdentifier] : +newValue
        }
    })
}
  return(
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Enter Valid Input Data</p>}
      { inputIsValid && <Results input = {userInput} />}
    </>
  )
}

export default App
