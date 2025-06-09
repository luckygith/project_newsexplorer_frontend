import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

import "./App.css";



import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {

  const [card, setCard] = useState({
    title: "",
    imageUrl: "",
    publishedAt: "",
    description: "",
    content: "",
  });
 
 return (
  <div className="page">
    <div className="page__content">
  
      <Header />
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
  </div>
  );
}

export default App;
