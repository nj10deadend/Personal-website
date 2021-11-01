import logo from './logo.svg';
import './App.css';

import Bio from './components/Bio';
import TechnicalProject from './components/TechnicalProject'
import Films from './components/Films'
import Music from './components/Music'
import SocialLinks from './components/SocialLinks'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <SocialLinks />

      <hr></hr>

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
