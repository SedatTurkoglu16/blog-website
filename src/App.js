import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './news.svg';
import './App.css';
import Home from './pages/Home';
import CreatePost from './components/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config'
 
function App() {
  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/"> <img src={logo} alt='logo'></img></Link>
        {!isAuth ? (
        <Link to="/login"> Login </Link> ) : ( 
          <>
            <Link to="/createpost"> CreatePost </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
