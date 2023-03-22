import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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



function App() {

  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  const packagesServices = packagesServicessFactory()
  const offeredServices = offeredServcicesFactory();


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

  const onLoginSubmit = async (data) => {
    console.log(data)
  };

  const contextValues = {
    onLoginSubmit,
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
          <Route path='/blog' element={<Blog />} />
        </Routes>

      </main>

      <Footer />
      </AuthContext.Provider>
     

  );
}

export default App;
