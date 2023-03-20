import { Routes, Route } from 'react-router-dom';

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
import { Login } from './componets/Registration/Login';

function App() {
  return (
    <>

      <TopBar />
      <NavBar />
      
      <main id="main">
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/featurenqmam' element={<Feature />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/teamPage' element={<TeamPage />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/carouselnqmam' element={<Carousel />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>

      </main>
      {/* <Feature /> */}
      
      <Footer />


    </>

  );
}

export default App;
