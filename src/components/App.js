import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeHandler = () => {
      setIsDarkMode(!isDarkMode);
  }
  return (
    <div id="main" className={isDarkMode?'dark':'light'}>
      <h1>{isDarkMode ? "Dark Mode Activated":"Light Mode Activated"}</h1>
      <button onClick={changeHandler}>{isDarkMode ?'Switch to Light Mode':'Switch to Dark Mode'}</button>
    </div>
  )
}


export default App;
