import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from '../src/Navbar'

function App() {
  return (
    <>
    {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/' element={<SignUp/>}></Route>
        </Routes> 
      </Router>
    </>
  );
}

export default App;
