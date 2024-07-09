import { useState } from "react"

export default function UserInput({handleChange , userInput}){


    return(
        <section id="user-input">
            <div className="input-group">
            <p>
                <label>Intial Investment</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.intialInvestment} 
                    onChange={(event)=>handleChange('intialInvestment' , event.target.value)} />
            </p>
            <p>
                <label>Anual Investment</label>
                <input 
                    type="number" 
                    required
                    value={userInput.anualInvestment} 
                    onChange={(event)=>handleChange('anualInvestment' , event.target.value)}
                />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required
                    value={userInput.expectedReturn} 
                    onChange={(event)=>handleChange('expectedReturn' , event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required
                    value={userInput.duration} 
                    onChange={(event)=>
                        handleChange('duration' , event.target.value)
                    }
                />
            </p>
            </div>
        </section>
    )
}