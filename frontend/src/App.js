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
import Movie from './pages/Movie/Movie.js';
import Actor from './pages/Actor/Actor';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import axios from './axios';
import AddMovie from './pages/AddMovie/AddMovie';

function App() {
  const user = true;
  //axios.get('/movie/participant/').then(res => console.log(res))
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/profile/:id' element={user ? <Profile /> : <Login />} />
          <Route path='/profile/:id/settings' element={user ? <ProfileSettings /> : <Login />} />
          <Route path='/watchlist/:id' element={user ? <Watchlist /> : <Login />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/actor/:id' element={<Actor />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search-results' element={<Search />} />
          <Route path='/post-movie' element={<AddMovie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
