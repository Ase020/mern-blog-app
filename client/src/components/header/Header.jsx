import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  // const [user, setUser] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserContext);

  // useEffect(() => {
  //   fetch("http://localhost:8800/profile", {
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then((userInfo) => {
  //       setUser(userInfo.username);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8800/profile", {
      credentials: "include",
      method: "GET",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:8800/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/">
        <img src="/logo.svg" alt="logo" className="logo" />
      </Link>

      <nav>
        {username ? (
          <>
            <Link to="/create">Create new post</Link>
            <a href="/" onClick={handleLogout}>
              Logout(
              <span style={{ textTransform: "capitalize" }}>{username}</span>)
            </a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
