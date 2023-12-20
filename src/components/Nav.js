import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.jpg";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Gas Kromatografi Quiz" />
            <h3>Gas Kromatografi Quiz</h3>
          </Link>
        </li>
        <li>
          <Link className={classes.brand}>
          </Link>
        </li>
        <li>
          <Link className={classes.brand}>
          </Link>
        </li>
        <li>
          <Link className={classes.brand}>
          </Link>
        </li><li>
          <Link className={classes.brand}>
          </Link>
        </li><li>
          <Link className={classes.brand}>
          </Link>
        </li>
        <li>
          <Link className={classes.brand}>
          </Link>
        </li><li>
          <Link className={classes.brand}>
          </Link>
        </li>
        <li>
          <Link className={classes.brand}>
          </Link>
        </li>
        <li>
          <Link className={classes.brand}>
          </Link>
        </li><li>
          <Link className={classes.brand}>
          </Link>
        </li><li>
          <Link className={classes.brand}>
          </Link>
        </li><li>
          <Link className={classes.brand}>
          </Link>
        </li>
        <li>
          <Link to="/learn" className={classes.brand}>
            <h3>Materi</h3>
          </Link>
        </li>
        <li>
          <Link to="/take" className={classes.brand}>
            <h3>Quiz</h3>
          </Link>
        </li>
        
      </ul>
      <Account />
    </nav>
  );
}
