export const NavBar = () => {
    return (
        <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: "9"}} >
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="#/" className="navbar-brand">
                    <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        <a href="package.html" className="nav-item nav-link">Tour Packages</a>
                        <div className="nav-item dropdown">
                            <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu border-0 rounded-0 m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                                <a href="destination.html" className="dropdown-item">Destination</a>
                                <a href="guide.html" className="dropdown-item">Travel Guides</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
};