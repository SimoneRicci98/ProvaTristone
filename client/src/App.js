import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Comments from './pages/Comments';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
