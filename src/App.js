import logo from "./logo.svg";
import "./styles/App.scss";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Postingcard from "./components/Postingcard";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={<ProtectedRoute component={Home} />}
          ></Route>
        </Route>
        <Route element={<Layout />}>
          <Route
            path="/friends"
            element={<ProtectedRoute component={Friends} />}
          ></Route>
        </Route>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        {/* <Route path="/home" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
