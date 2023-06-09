import { Link } from "react-router-dom";

export const Article = ({
    title,
    days,
    budget,
    imageUrl,
    username,
    _id,
    _ownerId
}) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
            <div className="blog-item">
                <div className="position-relative">
                    <img className="img-fluid w-100" src={imageUrl} alt="fluid" />
                    <div className="blog-date">
                        {/* <h6 className="font-weight-bold mb-n1">Took a look</h6> */}
                        <small className="text-white text-uppercase">Took a look</small>
                    </div>
                </div>
                <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                        <a className="text-primary text-uppercase text-decoration-none" href="#/">Article owner</a>
                        <span className="text-primary px-2">|</span>
                        <a className="text-primary text-uppercase text-decoration-none" href="#/">{username}</a>
                    </div>
                    <a className="h5 m-0 text-decoration-none" href="#/"><p>{title}</p>  <p>{days} - Days</p> <p>{budget} Euro - Budget</p> </a>
                    <div>
                        <Link to={`/details/${_id}`}>
                            <button className="mybtn color">Read more..</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
