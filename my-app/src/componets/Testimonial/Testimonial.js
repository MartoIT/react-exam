
export const Testimonial = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h6>
                    <h1>What Say Our Clients</h1>
                </div>
                <div className="row" >
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                        <div >
                            <img src="img/testimonial-1.jpg" style={{ width: "100px", height: "100px" }} alt="flu" />
                            <div className="testimonial-text bg-white p-4 mt-n5">
                                <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 className="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                        <div>
                            <img src="img/testimonial-2.jpg" style={{ width: "100px", height: "100px" }} alt="flu" />
                            <div className="testimonial-text bg-white p-4 mt-n5">
                                <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 className="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                        <img src="img/testimonial-3.jpg" style={{ width: "100px", height: "100px" }} alt="flu" />
                        <div className="testimonial-text bg-white p-4 mt-n5">
                            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                            <h5 className="text-truncate">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                        <img src="img/testimonial-4.jpg" style={{ width: "100px", height: "100px" }} alt="flu" />
                        <div className="testimonial-text bg-white p-4 mt-n5">
                            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                            <h5 className="text-truncate">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5 ">


                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4" >
                            <h1 className="text-white m-0">Love what we do</h1>
                            <h2 className=" m-0">Leave us a review</h2>
                            
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5" >
                            <form>
                                <div className="form-group">
                                    <input type="name" className="form-control p-4" placeholder="Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control p-4" name="review" placeholder="leave a review" rows="4" cols="40" />

                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">Send</button>
                                </div>

                               

                            </form>

                        </div>
                    </div>
                </div>
                
            </div>
            

        </div>
    );
};