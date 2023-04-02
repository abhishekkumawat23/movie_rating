import './Signup.css';
import {useState, useEffect} from "react";
import axios from "axios";
import {Link , useNavigate} from "react-router-dom";

function Signup({onSignupSuccess, setShowSignUpPage}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function onSubmitHandler(event) {
    event.preventDefault();
    const user = {email, password, name};
    const response = await axios.post("http://localhost:9000/signup", user);
    const token = response.data.token;
    localStorage.setItem("token", token);
    navigate("/");
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="Signup box">
      <form className="form" onSubmit={onSubmitHandler}>
          <h2>Welcome!!!</h2>
          <div className="inputBox">
              <span>Full Name</span>
              <input name="username" type="text" value={name} onChange={onNameChange} required="required" />
              <i></i>
          </div>
          <div className="inputBox">
              <span>Email</span>
              <input name="Email" type="email" value={email} onChange={onEmailChange} required="required" />
              <i></i>
          </div>
          <div className="inputBox">
              <span>Password</span>
              <input name="Password" type="password" value={password} onChange={onPasswordChange} required="required" />
              <i></i>
          </div>
          <Link to="/login">Login</Link>
          <button name="SignupSubmitButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

