import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
