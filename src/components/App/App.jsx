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
import RegistrationConfirmedModal from '../RegistrationConfirmedModal/RegistrationConfirmedModal';
import NewsCard from '../NewsCard/NewsCard';

function App() {

  const [card, setCard] = useState({
    title: "",
    imageUrl: "",
    publishedAt: "",
    description: "",
    content: "",
  });
 
  const [activeModal, setActiveModal] = useState("")
  const [newsCards, setNewsCards] = useState([]);



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
  handleRegistrationConfirmedClick();
  console.log("setup REGISTER")
}

const handleRegistrationConfirmedClick = () => {
  setActiveModal("registration-confirmed");}


const handleSaveCard = () => {
console.log("save card function set up")
}

const handleMenuIcon = () => {
  console.log("Menu icon dropdown")
}

 return (
  <div className="page">
    <div className="page__content">
   
        <Header handleLoginClick={handleLoginClick} handleMenuIcon={handleMenuIcon}/>

      <Routes>
        <Route 
        path="/"
        element={
          <>
          <Navigation />
          <Main handleLoginClick={handleLoginClick} handleSaveCard={handleSaveCard}/>
          <About />
        </>
        }
        />
          <Route 
        path="/saved-news"
        element={
          
          <Profile handleSaveCard={handleSaveCard}/>
        }
        />
        </Routes> 
        <Footer />
    </div>


{activeModal === "login" && (
  <LoginModal 
  isOpen={activeModal === "login"}
  handleCloseModal={handleCloseModal}
  handleLogin={handleLogin}
  handleRegistration={handleRegistration}
  handleRegisterClick={handleRegisterClick}
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
  <RegistrationConfirmedModal 
  isOpen={activeModal === "login"}
handleLoginClick={handleLoginClick}
  handleCloseModal={handleCloseModal}
   />
)}
{/* 
{activeModal === "dropdown-menu" && (
  
)} */}
  </div>
  );
}

export default App;
