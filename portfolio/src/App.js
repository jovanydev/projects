import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero'
import Projects from './components/Projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  if (isDarkMode) {
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
  }
  
  function toggleMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div>
      <Nav handleClick={toggleMode}/>
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
