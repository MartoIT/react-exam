export const Blog = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Blog</h6>
                        <h1>Latest From Our Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-1.jpg" alt="fluid" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Admin</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Tours & Travel</a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="#/">Dolor justo sea kasd lorem clita justo diam amet</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-2.jpg" alt="fluid" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Admin</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Tours & Travel</a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="#/">Dolor justo sea kasd lorem clita justo diam amet</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-3.jpg" alt="fluid" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Admin</a>
                                        <span className="text-primary px-2">|</span>
                                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Tours & Travel</a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="#/">Dolor justo sea kasd lorem clita justo diam amet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <section className="card-body rounded-bottom bg-white p-5">
                <form>
                    <h1>
                        New Blog Post Entry
                    </h1>
                    <div className="form-group">
                        <input type="text" className="form-control p-4" placeholder="title" name="title" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control p-4" placeholder="days" name="days" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control p-4" placeholder="budget" name="budget" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control p-4" src="sdasda" alt="Submit" width="100" height="100" name="imageUrl" placeholder="pictures from vacation" />

                    </div>
                    <div className="form-group">
                        <textarea className="form-control p-4" name="post" placeholder="Post here..." rows="4" cols="40" />

                    </div>
                    <div>
                        <button className="btn btn-primary btn-block py-3" type="submit">Send</button>
                    </div>
                </form>
            </section>
        </>
    );
};