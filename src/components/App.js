import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  return (
    <div id="main" style={{ backgroundColor: isDarkMode ?  "rgb(255, 255, 255)" :"rgb(0, 0, 0)", color: isDarkMode ?   "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}}>
      <h1>{isDarkMode ?   "Light Mode Activated" : "Dark Mode Activated"}</h1>
      <button onClick={handleToggleClick}>
        {isDarkMode ?   "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  )
}


export default App;
