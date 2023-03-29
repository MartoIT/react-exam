export const Review = ({
    username,
    imageUrl,
    review,
    stars,
}) => {

    const current = Number(stars)
    return (

       
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
       
    );
};