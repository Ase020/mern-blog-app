import { Link } from "react-router-dom";

import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="card-register">
        <div className="left-register">
          <h1>Lama Social.</h1>
          <p>
            Welcome to <span className="logo">aseDesign.</span> blogsite the
            home of entertainment and knowledge.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn-login" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
