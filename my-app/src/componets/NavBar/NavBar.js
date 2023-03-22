import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';

export const NavBar = () => {

    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }} >
                <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                   <Link to={"/"} className="navbar-brand">
                        <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                    </Link>
                    {isAuthenticated && (<span>Hello {userEmail}</span>)}
                    
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {isAuthenticated && (
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            
                            <Link to={"/"} className="nav-item nav-link active">Home</Link>
                        
                            <div className="nav-item dropdown">
                                <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown">Services Pages</a>
                                <div className="dropdown-menu border-0 rounded-0 m-0">
                                   <Link to={"/services"} className="dropdown-item">Services</Link> 
                                   <Link to={"/packages"} className="dropdown-item">Packages</Link>
                                   <Link to={"/destination"} className="dropdown-item">Destination</Link> 
                                </div>
                            </div>
                           <Link to={"/registration"} className="nav-item nav-link">logout</Link> 
                            <div className="nav-item dropdown">
                                <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown">About</a>
                                <div className="dropdown-menu border-0 rounded-0 m-0">
                                    <Link to={"/teamPage"} className="dropdown-item">Our team</Link>
                                    <Link to={"/testimonial"} className="dropdown-item">Other about us</Link>
                                    <Link to={"/blog"} className="dropdown-item">Blog</Link>
                                    <a href="destination.html" className="dropdown-item">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    
                    {!isAuthenticated && (
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            
                            <Link to={"/"} className="nav-item nav-link active">Home</Link>
                          
                           <Link to={"/registration"} className="nav-item nav-link">Registration</Link> 
                           <Link to={"/login"} className="nav-item nav-link">login</Link>
                            <div className="nav-item dropdown">
                                <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown">About</a>
                                <div className="dropdown-menu border-0 rounded-0 m-0">
                                    <Link to={"/teamPage"} className="dropdown-item">Our team</Link>
                                    <Link to={"/testimonial"} className="dropdown-item">Other about us</Link>
                                    <Link to={"/blog"} className="dropdown-item">Blog</Link>
                                    <a href="destination.html" className="dropdown-item">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </nav>
            </div>
        </div>
    );
};