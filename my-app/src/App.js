import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './context/authContext';

import { Booking } from "./componets/Booking/Booking";
import { Carousel } from "./componets/Carousel/Carousel";
import { Destination } from "./componets/Destination/Destination";
import { Feature } from "./componets/Feature/Feature";
import { NavBar } from "./componets/NavBar/NavBar";
import { HomePage } from "./componets/Home/HomePage";
import { TopBar } from "./componets/TopBar/TopBar";
import { Services } from "./componets/Services/Services";
import { Packages } from "./componets/Packages/Packages";
import { Registration } from "./componets/Registration/Registration";
import { TeamPage } from "./componets/TeamPage/TeamPage";
import { Testimonial } from "./componets/Testimonial/Testimonial";
import { Blog } from "./componets/Blog/Blog";
import { Footer } from "./componets/Footer/Footer";
import { Login } from './componets/Login/Login';
import { offeredServcicesFactory } from './services/offeredServices';
import { packagesServicessFactory } from './services/packagesServices';
import { authServicesFactory } from './services/authServices';
import { Logout } from './componets/Logout/Logout';
import { Post } from './componets/Blog/Post';
import { articlesServcicesFactory } from './services/articlesServices';



function App() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  const [article, setArticle] = useState([]);
  const [userData, setUserData] = useState('');
  const packagesServices = packagesServicessFactory()
  const offeredServices = offeredServcicesFactory();
  const articleServices = articlesServcicesFactory()
  const authService = authServicesFactory()


  useEffect(() => {
    packagesServices.getAll()
      .then(result => {
        setPackages(result)
      })
  }, []);

  useEffect(() => {
    offeredServices.getAll()
      .then(result => {
        setServices(result)
      })
  }, []);

  useEffect(() => {
    articleServices.getAll()
      .then(result => {
        setArticle(result)
      })
  }, []);


  const onLoginSubmit = async (data) => {

    const result = await authService.login(data);
    if (!result._id) {
      alert(result.message);
      return;
    }
    setUserData(result)
    
    navigate('/');



  };
  const onRegisterSubmit = async (data) => {

    const result = await authService.register(data);
    
    if (data.password !== data.rePass) {
      alert(`Password doesn't match!`);
      return;
    }
    setUserData(result)

    navigate('/');

  };

  const onLogout = async () => {
     const result = await authService.logout();
     setUserData('');
     navigate('/');
  }

  const onPostSubmit = async (data, token) => {
    const newArticle = await articleServices.addNewPost(data, token);
    
  
    navigate('/blog');

  }

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    onPostSubmit,
    userId: userData._id,
    token: userData.accessToken,
    username: userData.username,
    userEmail: userData.email,
    isAuthenticated: !!userData.accessToken,
  }



  return (

    <AuthContext.Provider value={contextValues} >



      <TopBar />
      <NavBar />

      <main id="main">
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services services={services} />} />
          <Route path='/packages' element={<Packages packages={packages} />} />
          <Route path='/featurenqmam' element={<Feature />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/teamPage' element={<TeamPage />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/carouselnqmam' element={<Carousel />} />
          <Route path='/blog' element={<Blog article={article}/>} />
          <Route path='/post' element={<Post onPostSubmit={onPostSubmit}/>} />
          <Route path='/logout' element={<Logout />} />
        </Routes>

      </main>

      <Footer />
    </AuthContext.Provider>


  );
}

export default App;
