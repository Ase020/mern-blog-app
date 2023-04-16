import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Welcome to <span className="logo">aseDesign.</span> blogsite the
            home of entertainment and knowledge.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" name="" id="" placeholder="password" />
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
