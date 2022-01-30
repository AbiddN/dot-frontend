import logo from './logo.svg';
import './styles/App.scss';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Postingcard from './components/Postingcard';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        </Routes> 
      </Router>
    </>
  );
}

export default App;
