import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
//pages
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'
import LogIn from './pages/LogIn/LogIn'

import './index.css'

function Navigation() {
  const navigate = useNavigate();
  
  const goToHome = () => navigate('/');
  const goToSignUp = () => navigate('/signup');
  const goToLogIn = () => navigate('/login');

  return (
    <Routes>
      <Route path="/" element={ <Home goToSignUp={goToSignUp} /> } />
      <Route path="/signup" element={ <SignUp goToLogIn={goToLogIn}
                                              goToHome={goToHome} /> } />
      <Route path="/login" element={ <LogIn goToSignUp={goToSignUp}
                                            goToHome={goToHome} /> } />
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
