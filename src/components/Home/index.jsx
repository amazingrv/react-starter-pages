import './styles.css';

import { Jumbotron } from 'react-bootstrap';
import logo from '../../assets/logo.svg';

export default function App() {
  const linkContent = [
    { link: 'https://reactjs.org/', text: 'React' },
    { link: 'https://redux-toolkit.js.org/', text: 'Redux Toolkit' },
  ];

  return (
    <div className="text-center">
      <img src={logo} className="logo title" alt="logo" />
      <Jumbotron fluid>
        <h1 className="display-3">Hello, React!</h1>
        <p className="lead">
          Simple project setup for ReactJS with ReduxJS integration
        </p>
        <hr className="my-2" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <span>Learn </span>
          {linkContent.map(item => (
            <a
              key={item.text}
              className="btn-link"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {` ${item.text}`}
            </a>
          ))}
        </p>
      </Jumbotron>
    </div>
  );
}
