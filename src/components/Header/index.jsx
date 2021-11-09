import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div>
      <Navbar className="mb-2" bg="primary" variant="dark" expand="md">
        <Container>
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon icon={['fab', 'react']} /> Home
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <Link className="nav-link" to="counter">
                  Counter
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="table">
                  DataTable
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
