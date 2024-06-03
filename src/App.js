import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/services' Component={Services} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
