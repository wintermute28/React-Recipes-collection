import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="green darken-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Bon Appétit
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
