import logo from './logo.svg';
import './App.css';
import React , { useState } from 'react';

export default App;

function App() {
  const [inputValue, setInputValue] = 
  useState('丸亀製麺に\n労働基準法は\n適用されない\n\nうどんで\nあなたを\n驚かせたい');

  const [spaces, setSpaces] = useState(1);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSpacesChange = (e) => {
    setSpaces(e.target.value);
  }

  function handleClick() {
    const value = inputValue;
    const lines = value.split('\n');
    const maxLen = Math.max(...lines.map((line) => line.length));

    for (let i = 0; i < lines.length; i++) {
      const diff = maxLen - lines[i].length;
      lines[i] = lines[i] + '　'.repeat(diff);
    }

    const newLines = Array.from({length: maxLen}, () => '');
    for (let i = 0; i < maxLen; i++) {
      for (let j = lines.length-1; j >= 0; j--) {
        newLines[i] += lines[j][i];
        newLines[i] += ' '.repeat(spaces);
      }
    }

    setInputValue(newLines.join('\n'));
  }

  return (
    <div className="App">
      <Button 
      onClick = {handleClick}
      onChange={handleSpacesChange}/>
      <TextBox 
      onChange = {handleChange}
      value={inputValue}/>
    </div>
  );
}


function TextBox({ onChange, value }) {
  return (
    <textarea
      rows="20"
      cols="50"
      onChange={onChange}
      value={value}
    />
  );
}

function Button({onClick, onChange}) {
  return (
    <>
      <button onClick={onClick}>縦書き!</button>
      　　spaces
      <input
        type="number"
        onChange={onChange}
        style={{ width: '40px' }}
        placeholder="1"
      />
      <br></br>
    </>
  );
}

