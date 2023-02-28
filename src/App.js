import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Search from './pages/Search';
import Results from './pages/Results';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/results' element={<Results/>} />
        <Route path='/history' element={<History/>} />
    </Routes>
    </Router>
);
}


export default App;