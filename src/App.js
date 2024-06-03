import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './globalStyles';

function App() {
  let location = useLocation()

  return (
    <>
      <GlobalStyles />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/services' Component={Services} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
