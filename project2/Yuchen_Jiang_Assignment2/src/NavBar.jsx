import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="NavBarContainer">
          <div>
            <Link to="/">Game Explanation</Link>
          </div>
          <div>
            <Link to="/grid">Play the Game</Link>
          </div>
          <div>
            <Link to="/credit">Credit</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};

export default NavBar;