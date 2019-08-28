import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello name="Dave" />
      <Hello name="Juan" enthusiasmLevel={10} />
      <Hello name="Vasily" enthusiasmLevel={9001} />
    </div>
  );
}

export default App;
