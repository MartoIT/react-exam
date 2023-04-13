
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../context/authContext';
import { reviewServicessFactory } from '../../services/reviewServices';
import { StarRating } from "../../utils/StarRating";
import { Review } from "./review";

export const Testimonial = () => {
    const { token, username, imageUrl } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    const reviewServices = reviewServicessFactory();
    useEffect(() => {
        reviewServices.getAll()
            .then(result => {
                setReview(result)
            })
    }, []);


    const onSubmit = async (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const stars = e.target.children[0].children[5].textContent.charAt(11);
        const data = {
            review,
            stars,
            imageUrl,
            username
        };

        await reviewServices.addReview(data, token);
        
        reviewServices.getAll()
            .then(result => {
                setReview(result)
            });

         e.target.review.value = ''
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
       
    }
    return (

        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h6>
                    <h1>What Say Our Clients</h1>
                </div>

                <div className="row">
                    {review.map(r => <Review key={Math.random()} {...r} />)}
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4" >
                            <h1 className="text-white m-0">Love what we do</h1>
                            <h2 className=" m-0">Leave us a review</h2>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5" >
                            <form onSubmit={onSubmit}>
                                {<StarRating />}
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