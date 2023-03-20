export const Registration = () => {
    return (
        <div className="container-fluid bg-registration py-5" style={{margin: '90px 0'}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h6 className="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Mega Offer</h6>
                        <h1 className="text-white"><span className="text-primary">30% OFF</span> For Honeymoon</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4">
                            <h1 className="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control p-4" placeholder="Password" required="required" />
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                </div>
                                <p style={{margin: "10px"}}>Already have an account? <a href="/Login"> Log in</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};