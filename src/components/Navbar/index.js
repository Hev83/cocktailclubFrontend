import "./main.css";
import { Link } from "react-router-dom";
import LocalBarIcon from '@material-ui/icons/LocalBar';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = ({ user, setUser }) => {
  const logout = () => {
    setUser("");
  };

  return (
    <nav>
      
      <ul className="nav-links">
        <Link to="/home"><HomeIcon/>Home</Link>
        <Link to="/about"><InfoIcon/>About</Link>
        <Link to="/cocktails"><LocalBarIcon/>Search</Link>
        <Link to="/profile"><PersonIcon/>Profile</Link>
        <button onClick={() => logout()}><ExitToAppIcon/></button>
      </ul>
    </nav>
  );
};

export default Navbar;
