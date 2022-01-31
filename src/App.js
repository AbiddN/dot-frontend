import logo from "./logo.svg";
import "./styles/App.scss";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Postingcard from "./components/Postingcard";

function App() {
  return (
    <Routes>

      <Route exact path="/" element={<Landing />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/home" element={<ProtectedRoute component={Home} />}></Route>
      <Route
        path="/friends"
        element={<ProtectedRoute component={Friends} />}
      ></Route>
    </Routes>
  );
}

export default App;
