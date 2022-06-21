import { Link } from 'react-router-dom';
import data from './walls.json';

export default function Nav() {
  return (
    <nav>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <Link to={`/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
