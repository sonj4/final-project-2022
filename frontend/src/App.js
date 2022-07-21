import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings';
import Watchlist from './pages/Watchlist/Watchlist';

function App() {
  const user = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/profile/:id' element={user ? <Profile /> : <Login />} />
          <Route path='/profile/:id/settings' element={user ? <ProfileSettings /> : <Login />} />
          <Route path='/watchlist/:id' element={user ? <Watchlist /> : <Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
