import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import "./App.css";



import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Footer from '../Footer/Footer';
import ModalwithForm from '../ModalWithForn/ModalwithForm';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';

function App() {

  const [card, setCard] = useState({
    title: "",
    imageUrl: "",
    publishedAt: "",
    description: "",
    content: "",
  });
 
  const [activeModal, setActiveModal] = useState("")

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

const handleLogin = () => {
  console.log("setup LOGIN");
}

const handleRegisterClick = () => {
  setActiveModal("registration");
}

const handleRegistration = () => {
  console.log("setup REGISTER")
}

 return (
  <div className="page">
    <div className="page__content">
  
      <Header handleLoginClick={handleLoginClick}/>
      <Navigation />
      <About />
      <Footer />
   

      <Routes>
        <Route 
        path="/"
        element={
          <Main />
        }
        />
          <Route 
        path="/profile"
        element={
          <Profile />
        }
        />
        </Routes> 

    </div>


{activeModal === "login" && (
  <LoginModal 
  isOpen={activeModal === "login"}
  handleCloseModal={handleCloseModal}
  handleLogin={handleLogin}
  handleRegistration={handleRegistration}
/>
)}

{activeModal === "registration" && (
  <RegisterModal 
  isOpen={activeModal === "registration"}
  handleCloseModal={handleCloseModal}
  handleRegistration={handleRegistration}
handleLoginClick={handleLoginClick}
  />
)}

{activeModal === "registration-confirmed" && (
  <RegistrationConfirmedModal />
)}

   
  </div>
  );
}

export default App;
