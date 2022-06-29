import "./Nav.css";
import { Link } from "react-router-dom";
import data from "../walls.json";

export default function Nav() {
  return (
    <nav>
      <span className="nav-title">
        <Link to="/">DW</Link>
      </span>
      <span className="nav-links">
        <a href="https://github.com/aynp/dracula-wallpapers-website">
          <img src={process.env.PUBLIC_URL + '/github-logo.png'} alt="Github"/>
        </a>
      </span>
      <ul>
        {data.map((item, index) => (
          <li key={item.name}>
            <Link to={`/${index + 1}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}