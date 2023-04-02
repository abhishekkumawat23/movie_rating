import './Header.css';
import {useState, useEffect} from "react";

function Header() {
  // const token = localStorage.getItem("token");
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleStorageChange() {
    if (token != localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  }

  useEffect(() => window.addEventListener('storage', handleStorageChange), []);

  function onLogoutHandler() {
    localStorage.removeItem("token");
  }
   
  return (
    <>
      <h1 className="Header">
        Moving Rating Website
      </h1>
      {token ? <button className="button" onClick={onLogoutHandler}>Log Out</button> : <></>}
    </>
  );
}

export default Header;

