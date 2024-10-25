import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Profile from './pages/Profile';
import Auth from './components/Auth';
import Leaderboard from './components/Leaderboard.jsx';
import Login from './components/Login.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </Router>
    );
}

export default App;
