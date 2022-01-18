import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
