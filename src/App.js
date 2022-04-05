import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
