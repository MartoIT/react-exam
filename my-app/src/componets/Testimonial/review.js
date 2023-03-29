export const Review = ({
    username,
    imageUrl,
    review,
    stars,
}) => {

    const current = Number(stars)
    return (

        <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h6>
                <h1>What Say Our Clients</h1>
            </div>
            <div className="row" >
                <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
                    <div >
                        <img src={imageUrl} style={{ width: "100px", height: "100px" }} alt="flu" />

                        <div className="testimonial-text bg-white p-4 mt-n5">
                            <p className="mt-5">{review}</p>
                            <div className="icons align-items-center">
                                {[...Array(current)].map(() => (<i key={Math.random()} className="fa fa-star text-warning"></i>))}
                            </div>
                            <h5 className="text-truncate">Client Name</h5>
                            <span>{username}</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};