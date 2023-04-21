import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userLogin = {
      username: username,
      password: password,
    };

    const response = await fetch("http://localhost:8800/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
      credentials: "include",
    });

    response.status === 200
      ? response.json().then((userInfo) => {
          setUserInfo(userInfo);
          navigate("/");
        })
      : setError(true);
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>felixBlog.</h1>
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          {error && (
            <span
              className={"login-error"}
              style={error && { display: "flex" }}
            >
              Login failed❗
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
