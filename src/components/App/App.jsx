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

function App() {

  const [card, setCard] = useState({
    title: "",
    imageUrl: "",
    publishedAt: "",
    description: "",
    content: "",
  });
 
  const [activeModal, setActiveModal] = useState("")



 return (
  <div className="page">
    <div className="page__content">
  
      <Header />
      <Navigation />
      <About />
      <Footer />
      <ModalwithForm />

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


    {/* <LoginModal />
<SignUpModal />
<RegistrationConfirmedModal /> */}
  </div>
  );
}

export default App;
