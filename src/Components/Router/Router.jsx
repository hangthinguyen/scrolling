import { Link, Outlet } from "react-router-dom";
import "./Router.css";

const Router = ({ isToggle }) => {
  return (
    <>
      <div
        className="links-container"
        style={{
          display: !isToggle ? "flex" : "none",
        }}
      >
        <ul className="links">
          <li>
            <Link to="/" className="scroll-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="scroll-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="scroll-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/tours" className="scroll-link">
              Tours
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Router;
