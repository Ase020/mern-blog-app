import { Link } from "react-router-dom";

import "./Register.css";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // body: JSON.stringify( newUser ),
      body: JSON.stringify({ username, password, email }),
    });
  };

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
        </div>
      </div>
    </div>
  );
};

export default Register;
