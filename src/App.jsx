import React, { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details';
import BIgWeather from './components/BIgWeather';


function App() {

    const [userInput,setUserInput] = useState("");

    const onSearch = async (input) => {
        setUserInput(input);
    }  

    return (
        <div className="bg-[#374151] h-screen flex justify-center items-center">
            {userInput.length===0 && <Dashboard onSearch={onSearch}/>}
            {userInput.length!==0 && <Details userInput={userInput}/>}
        </div>
    )
  
}

export default App
