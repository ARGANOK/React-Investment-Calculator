import Header from "./Components/header"
import UserInput from "./Components/UserInputs"
import Results from "./Components/Results"
import { useState } from "react"


function App() {
  const [userInput , setUserInput] = useState({
    intialInvestment:10000,
    anualInvestment:10200,
    expectedReturn:6,
    duration:10
  })
  function handleChange(userIdentifier , newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [userIdentifier] : newValue
        }
    })
}
  return(
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Results input = {userInput} />
    </>
  )
}

export default App
