
import { Link } from "react-router-dom";

export const Footer = () => {

    

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for the email \n We will be in touch with you`)
        console.log(`tuk`)
    }
    return (
        <>
        
        <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{marginTop: "90px"}}>
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="#/" className="navbar-brand">
                    <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
                </a>
                <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: "5px"}}>Follow Us</h6>
                <div className="d-flex justify-content-start">
                
                    <a className="btn btn-outline-primary btn-square mr-2" href="#/"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#/"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square mr-2" href="#/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-primary btn-square" href="#/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: "5px"}}>Usefull Links</h5>
                <div className="d-flex flex-column justify-content-start">
                    <Link to={'/'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Home</Link>
                    <Link to={'/services'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Services</Link>
                    <Link to={'/destination'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Destination</Link>
                    <Link to={'/packages'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Packages</Link>
                    <Link to={'/teamPage'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Team</Link>
                    <Link to={'/testimonial'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Testimonial</Link>
                    <Link to={'/blog'} className="fa fa-angle-right mr-2 text-white-50 mb-2">Blog</Link>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h5 className="text-white text-uppercase mb-4" style={{letterSpacing: "5px"}}>Contact Us</h5>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, Sofia, Bulgaria</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                <h6 className="text-white text-uppercase mt-4 mb-3" style={{letterSpacing: "5px"}}>Newsletter</h6>
                <div className="w-100">
                <form onSubmit={onSubmit} >
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{padding: "25px"}} placeholder="Your Email" />
                        <div className="input-group-append">
                            <button className="btn btn-primary px-3">Sign Up</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
  
    </>
    );
};