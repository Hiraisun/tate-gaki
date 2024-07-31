import logo from './logo.svg';
import './App.css';

export default App;

function App() {
  return (
    <div className="App">
      <TextBox />
    </div>
  );
}


function TextBox() {
  return (
    <textarea rows="20" cols="50"></textarea>
  );
}
