// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout  from './components/Layout';
import EnterPage from './pages/EnterPage';
import EngagePage from './pages/EngagePage';
import ExitPage from './pages/ExitPage';
import PanelPage from './pages/PanelPage';
import {AthleteProvider} from './context/AthleteContext'

function App() {
  return (
    <AthleteProvider>
   <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
        <main className="container mx-auto px-4 py-8">
          <Routes>
          <Route path="/" element={<Navigate to="/en/enter" replace />} />
            
            {/* English routes */}
            <Route path="/en/enter" element={<EnterPage />} />
            <Route path="/en/panel" element={<PanelPage />} />
            <Route path="/en/engage" element={<EngagePage />} />
            <Route path="/en/exit" element={<ExitPage />} />
            
            {/* Welsh routes */}
            <Route path="/cy/enter" element={<EnterPage />} />
            <Route path="/cy/panel" element={<PanelPage />} />
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