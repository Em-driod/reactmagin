import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import ReachOut from './pages/ReachOut';
import Profile from './pages/Profile';
import Team from './pages/Team';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="reach" element={<ReachOut />} />
        <Route path="profile" element={<Profile name="Larry price" age={25} city="New York" />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
