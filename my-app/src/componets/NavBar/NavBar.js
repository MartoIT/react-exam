export const NavBar = () => {
    return (
        <div className="container-fluid position-relative nav-bar p-0">
            <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }} >
                <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="#/" className="navbar-brand">
                        <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <div class="nav-item dropdown">
                            <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown">Services Pages</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                                <a href="/services" class="dropdown-item">Services</a>
                                <a href="/packages" class="dropdown-item">Tour Packages</a>
                                <a href="/destination" class="dropdown-item">Destination</a>
                            </div>
                            </div>
                            <a href="/registration" className="nav-item nav-link">Registration</a>
                            <a href="/login" className="nav-item nav-link">login</a>
                            <a href="/registration" className="nav-item nav-link">logout</a>
                            <div class="nav-item dropdown">
                            <a href="#/" className="nav-link dropdown-toggle" data-toggle="dropdown">About</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                                <a href="/teamPage" class="dropdown-item">Our team</a>
                                <a href="/testimonial" class="dropdown-item">Other about us</a>
                                <a href="/blog" class="dropdown-item">Blog</a>
                                <a href="destination.html" class="dropdown-item">About us</a>
                                <a href="destination.html" class="dropdown-item">Contact</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};