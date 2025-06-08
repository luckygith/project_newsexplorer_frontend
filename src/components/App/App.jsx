import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
// import {Routes, Route} from 'react-router-dom';
import "./App.css";



import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';



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
