import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
//pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Dashboard from "./pages/Dashboard";

import './index.css'

function Navigation() {
  const navigate = useNavigate();
  
  const goToHome = () => navigate('/');
  const goToSignUp = () => navigate('/signup');
  const goToLogIn = () => navigate('/login');
  const goToDashboard = () => navigate('/dashboard');

  return (
    <Routes>
      <Route path="/" element={ <Home goToSignUp={goToSignUp} /> } />
      <Route path="/signup" element={ <SignUp goToLogIn={goToLogIn}
                                              goToHome={goToHome} /> } />
      <Route path="/login" element={ <LogIn goToSignUp={goToSignUp}
                                            goToHome={goToHome}
                                            goToDashboard={goToDashboard} /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navigation />
      </main>
    </BrowserRouter>
  )
}

export default App
