// import logo from './logo.svg';
import "./styles/App.scss";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
