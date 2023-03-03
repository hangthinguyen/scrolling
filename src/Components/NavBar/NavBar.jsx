import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import logo from "../../images/logo.svg";
import Router from "../Router/Router";
import "./NavBar.css";

const NavBar = () => {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle(!isToggle);
  }, [isToggle]);
  return (
    <nav className="extended-navbar">
      <div className="navbar">
        <img src={logo} alt="logo" />
        <button className="bar-btn" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Router isToggle={isToggle} />
    </nav>
  );
};

export default NavBar;
