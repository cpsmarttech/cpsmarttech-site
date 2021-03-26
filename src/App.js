import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      {/* <Container> */}
        <LandingPage></LandingPage>
      {/* </Container> */}
    </div>
  );
}

export default App;
