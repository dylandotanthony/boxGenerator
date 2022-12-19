import ColorForm from './components/form';
import Display from './components/Display';
import './App.css';
import React, { useState} from  'react';

function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="App">
      <h1> Color Box Generator</h1>
        < ColorForm boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
        <Display boxColorArray={boxColorArray} />
      
    </div>
  );
}

export default App;
