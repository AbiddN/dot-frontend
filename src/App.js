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
import Postingcard from "./components/Postingcard";

function App() {
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/SignIn" element={<SignIn />}></Route>
    //       <Route path="/SignUp" element={<SignUp />}></Route>
    //     </Routes>
    //   </Router>
    //   <ProtectedRoute path="/Home" element={<Home />}></ProtectedRoute>
    // </>
    <Routes>
      <Route exact path="/" element={<Landing />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      {/* <Route path="/home" element={<Home />}></Route> */}
      <Route
        path="/home"
        element={<ProtectedRoute component={Home} />}
      ></Route>
    </Routes>
  );
}

export default App;
