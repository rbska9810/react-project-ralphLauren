import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
import TopBanner from './pages/TopBanner';
import { useEffect, useState } from 'react';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const [login, setLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, [])


  return (

    <div>
      <TopBanner />
      <Routes>
        <Route path='/' element={<MainPage scrollPosition={scrollPosition} />} />
        <Route path='/Login' element={<Login scrollPosition={scrollPosition} setLogin={setLogin}/>} />
        <Route path='/ProductAll' element={<ProductAll scrollPosition={scrollPosition}/>} />
        <Route path='/Product/:name/:id' element={<PrivateRoute scrollPosition={scrollPosition} login={login}/>} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
