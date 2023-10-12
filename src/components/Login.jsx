import React, {useState} from "react";
import "./login.css";

function Login({LoginSubmit}) {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className="loginConatainer">
      <div></div>
      <div className="Loginbox">
        <form method="post" action="" onSubmit={()=>LoginSubmit(email,password)}>
          <h3 id="logo">Log In</h3>

          <label for="username">Email/Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Type in your username.."
            autocomplete="off"
            required
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password.."
            autocomplete="off"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          {/* <a class="forgot" href="#">
            Forgot Password?
          </a> */}
          {/* <a class="register" href="#">
            Register
          </a> */}

          <input type="submit" name="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
}

export default Login;
