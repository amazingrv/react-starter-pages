import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Home from './components/Home';
import DataTable from './components/DataTable';
import Counter from './components/Counter';

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar className="mb-2" bg="primary" variant="dark" expand="md">
        <Container>
          <Link replace={location.pathname === '/'} className="navbar-brand" to="/">
            <FontAwesomeIcon icon={['fab', 'react']} /> Home
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Item>
                <Link replace={location.pathname === '/counter'} className="nav-link" to="/counter">
                  Counter
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link replace={location.pathname === '/table'} className="nav-link" to="/table">
                  DataTable
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <Switch>
          <Route exact path="/table" component={DataTable} />
          <Route exact path="/counter" component={Counter} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
