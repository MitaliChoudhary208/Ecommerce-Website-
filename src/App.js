import "./App.css";
import AddProduct from "./Components/AddProduct";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProduct from "./Components/UpdateProduct";
import Logout from "./Components/Logout";
import Profile from "./Components/Profile";
import SignUp from "./Components/SignUp";
import PrivateComponent from "./Components/PrivateComponent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Navbar />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
