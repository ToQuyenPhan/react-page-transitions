import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services} />
      </Routes>
    </Router>
  );
}

export default App;
