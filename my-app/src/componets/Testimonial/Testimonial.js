import { StarRating } from "../../utils/StarRating";
import { Review } from "./review";

export const Testimonial = ({
    review,
}) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.children[0].children[5].textContent.charAt(11);
        console.log(rating);
        console.log(review);
        
    }
    return (
        <div className="container-fluid py-5">
             {review.map(r => <Review key={Math.random()} {...r} />)}


            <div className="container py-5 ">


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