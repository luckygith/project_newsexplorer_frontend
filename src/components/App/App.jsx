import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Footer from '../Footer/Footer';
import ModalwithForm from '../ModalWithForm/ModalWithForm';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import RegistrationConfirmedModal from '../RegistrationConfirmedModal/RegistrationConfirmedModal';
import NewsCard from '../NewsCard/NewsCard';
import Navigation from '../Navigation/Navigation';
import { fetchArticles } from '../../utils/api';
import { authorize, register } from '../../utils/auth';
import { getToken } from '../../utils/token';

function App() {

  const [card, setCard] = useState({
    title: "",
    urlToImage: "",
    publishedAt: "",
    description: "",
    name: "",
  });
 
const [activeModal, setActiveModal] = useState("");
const [currentUser, setCurrentUser] = useState({});
const [isLoggedIn, setIsLoggedIn] = useState(false)

const [newsCards, setNewsCards] = useState([]);
 const [searchQuery, setSearchQuery] = useState("");
 const [preloader, setPreloader] = useState(false);


const handleSearchForm = (query) => {
  if (!query) {
    console.log("Please type to search articles")
    setNewsCards([]);

    return;
  } 
    setSearchQuery(query);
    setPreloader(true);
    fetchArticles(query)
      .then((res) => {
        if (res.articles.length === 0) {
          throw new Error("Nothing Found");
        }
      setNewsCards(res.articles);
      })
      .catch((error) => {
        console.error("Sorry, something went wrong during the request. Please try again later.")
      })
      .finally(()=> {
        setPreloader(false);
      })
};

// The source name: source.name
// Publication title: title
// Publication date: publishedAt
// Publication description: description
// Related image: urlToImage



  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

const handleLogin = (email, password) => {
  console.log("setup LOGIN");
  setPreloader(true);
  if (!email || !password) {
    console.log("Login incomplete");
    return;
  }
  const token = getToken();
  authorize(email, password)
  .then((data) => {
    data,

  })
}

const handleRegisterClick = () => {
  setActiveModal("registration");
}

const handleRegistration = ({username, email, password}) => {
setPreloader(True);
if (!email || !password || !usernamename) {
  return;
}
  register(username, email, password)
  .then((data) => {
    if (data) {
      setCurrentUser(data);
      setIsLoggedIn(true);
    }
  })
  .then(() => {
    handleRegistrationConfirmedClick();
  })
  .catch((error) => {
    console.error("Error, registration request unsuccessful", error);
  })
  .finally(() => setIsLoading(false));
}




const handleRegistrationConfirmedClick = () => {
  setActiveModal("registration-confirmed");}


const handleSaveCard = () => {
console.log("save card function set up")
}

const handleMenuIcon = () => {
  console.log("Menu icon navigation");
  setActiveModal("navigation-menu");
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
          <SearchForm handleSearchForm={handleSearchForm}/>
          <Main handleLoginClick={handleLoginClick} 
                handleSaveCard={handleSaveCard}
                newsCards={newsCards}
                preloader={preloader}
             />
          <About />
        </>
        }
        />
          <Route 
        path="/saved-news"
        element={
          
          <Profile handleSaveCard={handleSaveCard} handleMenuIcon={handleMenuIcon} handleLoginClick={handleLoginClick}/>
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
  isOpen={activeModal === "registration-confirmed"}
  handleLoginClick={handleLoginClick}
  handleCloseModal={handleCloseModal}
   />
)}

{activeModal === "navigation-menu" && (
  <Navigation   

  isOpen={activeModal === "navigation-menu"}
  handleLoginClick={handleLoginClick}
  handleCloseModal={handleCloseModal}
  />
)}
  </div>
  );
}

export default App;
