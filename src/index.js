import React from 'react'
import ReactDOM from 'react-dom'
import ToggleSwitch from './toggleSwitch'



const App=()=>{


    return(

        <>
            <ToggleSwitch/>

        <button>Click me</button>
        </>
    )
}

ReactDOM.render(<App/>,document.querySelector("body"));