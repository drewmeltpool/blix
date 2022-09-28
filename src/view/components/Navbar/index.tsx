import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from 'src/view/ui-kit';

import './navbar.scss';

export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <Container size="md">
        <ul className="navbar-list flex gap-md">
          <li className="navbar-item">
            <Link title="Home" to="/" className="link navbar-link">
              <Typography title="Albums" variant="body-bold" />
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
