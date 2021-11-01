import logo from './logo.svg';
import './App.css';

import Bio from './components/Bio';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Bio />
      <hr></hr>
      <TechnicalProject />
      <hr></hr>
      <Films />
      <hr></hr>
      <Music />

      <hr></hr>

      <SocialLinks />
    </div>
  );
}

export default App;
