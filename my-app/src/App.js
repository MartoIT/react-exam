

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

function App() {
  return (
      <>

      <TopBar />
      <NavBar />
      <Carousel />
      <Booking />
      <HomePage />
      <Feature />
      <Destination />
      <Services />
      <Packages />
      <Registration />
      <TeamPage />
      <Testimonial  />

      </>
   
  );
}

export default App;
