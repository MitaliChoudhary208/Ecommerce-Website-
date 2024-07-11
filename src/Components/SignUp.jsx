import { useState } from "react";
import { signUp } from "../Api";
import { json, useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(user);
      setUser({
        name: "",
        email: "",
        password: "",
      });
      localStorage.setItem("user",JSON.stringify(user))
      navigate("/");
    } catch (err) {
      console.log(err, "something went wrong");
    }
  };

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
              value={user.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
              value={user.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button" onClick={onSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
