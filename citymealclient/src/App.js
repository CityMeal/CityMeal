import React from 'react';
import './App.css';
import Nav from './Component/Navbar/navbar'


function App() {
 
  const[screenSize, setScreenSize] = React.useState(360)

  const updateNav = () =>{
    setScreenSize(1024)
    console.log('clicking button')
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Hello World</h1>
      <button onClick={updateNav}>Click to update nav</button>
      <Nav size={screenSize} />
    </div>
  );
}

export default App;