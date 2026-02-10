
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import WelcomeOnboardingPage from './pages/WelcomeOnboardingPage';
import OtpLoginPage from './pages/OtpLoginPage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-background-dark">
      <div className="w-full max-w-[448px] mx-auto">
        <Routes>
          <Route path="/" element={<WelcomeOnboardingPage />} />
          <Route path="/login" element={<OtpLoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
