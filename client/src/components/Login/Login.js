import './Login.css';
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/");
  }
  
  async function onSubmitHandler(event) {
    event.preventDefault();
    const user = {email, password};
    
    try {
      const response = await axios.post("http://localhost:9000/login", user);
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.log("!!my error is " + error.response.data.message);
      setErrMessage(error.response.data.message);
    }

  }

  function onEmailChange(event) {
    setEmail(event.target.value);
    if(errMessage){
      setErrMessage("");
    }
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
    if(errMessage){
      setErrMessage("");
    }
  }

  return (
    <div className="Login box">
      <form className="form" onSubmit={onSubmitHandler}>
          <h2>Login</h2>
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
          <div className="links">
            <Link to="/signup">Sign up</Link>
          </div>
          <div className="links">
            <button name="LoginSubmitButton" type="submit">Log In</button>
          </div>
          <div style={{color: "red"}}>
            {errMessage}
          </div>

      </form>
    </div>
  );
}

export default Login;


