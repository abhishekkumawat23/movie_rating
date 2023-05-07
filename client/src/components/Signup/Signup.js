import './Signup.css';
import axios from "axios";
import {Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup({onSignupSuccess, setShowSignUpPage}) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function onSubmitHandler(data) {
    const response = await axios.post("http://localhost:9000/signup", data);
    const token = response.data.token;
    localStorage.setItem("token", token);
    navigate("/");
  }

  return (
    <div className="Signup box">
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
          <h2>Welcome!!!</h2>
          <div className="inputBox">
              <span>Full Name</span>
              <input type="text" {...register('username', {required: true})} />
              <i></i>
          </div>
          <div className="inputBox">
              <span>Email</span>
              <input type="email" {...register('email', {required: true})} />
              <i></i>
          </div>
          <div className="inputBox">
              <span>Password</span>  
              <input type="password" {...register('password', {required: true})} />
              <i></i>
          </div>
          <Link to="/login">Login</Link>
          <button name="SignupSubmitButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

