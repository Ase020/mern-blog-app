import { Link, useNavigate } from "react-router-dom";

import "./Register.css";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email: email,
    };

    const response = await fetch("http://localhost:8800/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
      // body: JSON.stringify({ username, password, email }),
    });

    response.status === 200 ? navigate("/login") : setError(true);
  };

  return (
    <div className="register">
      <div className="card-register">
        <div className="left-register">
          <h1>felix Blog.</h1>
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="btn-login" type="submit">
              Register
            </button>
          </form>

          {error && (
            <span className={"reg-error"} style={error && { display: "flex" }}>
              Registration failed❗ Try again later.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
