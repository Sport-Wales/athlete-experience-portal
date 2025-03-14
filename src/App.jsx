// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout  from './components/Layout';
import EnterPage from './pages/EnterPage';
import EngagePage from './pages/EngagePage';
import ExitPage from './pages/ExitPage';
import LandingPage from './pages/LandingPage';
import {AthleteProvider} from './context/AthleteContext'

function App() {
  return (
    <AthleteProvider>
   <Router>
      <div className="min-h-screen bg-white">
        <Layout>
        <main className="container mx-auto px-2 py-4 bg-white">
          <Routes>
          <Route path="/" element={<Navigate to="/en/enter" replace />} />
            
            {/* English routes */}
            <Route path="/en/enter" element={<EnterPage />} />
            <Route path="/en/panel" element={<LandingPage />} />
            <Route path="/en/engage" element={<EngagePage />} />
            <Route path="/en/exit" element={<ExitPage />} />
            
            {/* Welsh routes */}
            <Route path="/cy/enter" element={<EnterPage />} />
            <Route path="/cy/panel" element={<LandingPage />} />
            <Route path="/cy/engage" element={<EngagePage />} />
            <Route path="/cy/exit" element={<ExitPage />} />
          </Routes>
        </main>
        </Layout>
      </div>
    </Router>
    </AthleteProvider>
  );
}

export default App;