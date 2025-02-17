import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify';
import LandingPage from './pages/LandingPage';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import VerifyEmail from './components/auth/VerifyEmail';
import NotFoundPage from './pages/404';
function App() {

  return (
    <Router>
      <ToastContainer />
      <div className="relative dark:bg-main-dark-bg">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/otp/verify" element={<VerifyEmail />} />
          <Route path="/forgot_password/" element={<ForgotPassword />} />
          <Route path="/not_found" element={<NotFoundPage />} />
        </Routes>

       
      </div>
    </Router>
  )
}

export default App
