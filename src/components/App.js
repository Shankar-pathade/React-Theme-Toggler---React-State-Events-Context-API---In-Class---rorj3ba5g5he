import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div id="main" className={isDarkMode?'dark':'light'}>
      <h1>{isDarkMode ? "Dark Mode Activated":"Light Mode Activated"}</h1>
      <button onClick={() =>{setIsDarkMode(!isDarkMode)}}>{isDarkMode ?'Switch to Light Mode':'Switch to Dark Mode'}</button>
    </div>
  )
}


export default App;
