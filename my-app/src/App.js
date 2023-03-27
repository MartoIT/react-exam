import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './context/authContext';

import { Booking } from "./componets/Booking/Booking";
import { Destination } from "./componets/Destination/Destination";
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
import { DetailsArticle } from './componets/Blog/DetailsArticle';
import { EditPost } from './componets/Blog/EditPost';
import { commentsServcicesFactory } from './services/comentsServices';



function App() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  const [article, setArticle] = useState([]);
  const [commnets, setComents] = useState([]);
  const [userData, setUserData] = useState('');
  const packagesServices = packagesServicessFactory()
  const offeredServices = offeredServcicesFactory();
  const articleServices = articlesServcicesFactory()
  const authService = authServicesFactory()
  const commnetServices = commentsServcicesFactory();


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
    await authService.logout();

    setUserData('');
    navigate('/');
  }

  const onPostSubmit = async (data, token) => {
    await articleServices.addNewPost(data, token);
    articleServices.getAll()
      .then(result => {
        setArticle(result)
      })

    navigate('/blog');

  }


  const onDeleteClick = async (id, token) => {

    const result = await articleServices.delete(id, token);
    articleServices.getAll()
      .then(result => {
        setArticle(result)
      })


    navigate('/blog');
  };
  const onEditClick = async (id, data, token) => {
   
    const result = await articleServices.edit(id, data, token)
    articleServices.getAll()
      .then(result => {
        setArticle(result)
      })


    navigate('/blog');
  };
  
  const onComentAdd = async (username, articleId, comment, token) => {
    const result = await commnetServices.addNewComent(username, articleId, comment, token);
    
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    onPostSubmit,
    onDeleteClick,
    onComentAdd,
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
          <Route path='/destination' element={<Destination />} />
          <Route path='/teamPage' element={<TeamPage />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/blog' element={<Blog article={article} />} />
          <Route path='/post' element={<Post onPostSubmit={onPostSubmit} />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/details/:articleId' element={<DetailsArticle onDeleteClick={onDeleteClick} onComentAdd={onComentAdd} />} />
          <Route path='/details/:articleId/edit' element={<EditPost onEditClick={onEditClick}/>} />
        </Routes>

      </main>

      <Footer />
    </AuthContext.Provider>


  );
}

export default App;
