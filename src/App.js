import logo from './logo.svg';
import './App.css';
import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'my-service-name',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://1ecc7c85ee2a41c5b7be35e515b650d3.apm.ap-northeast-1.aws.cloud.es.io:443',

  // Set the service version (required for source map feature)
  serviceVersion: '',

  // Set the service environment
  environment: 'my-environment'
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
