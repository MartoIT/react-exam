import { Suspense } from 'react';
import { Link } from "react-router-dom";
import { Article } from './Article.js'
export const Blog = ({
    article
}) => {
    return (

        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Blog</h6>

                    <h1>Tell us about your best vacation</h1><h2 ><Link to={"/post"}>Click here</Link></h2>
                </div>
                <div className="row pb-3">
                    <Suspense >
                        {article.map(a => <Article key={Math.random()} {...a} />)}
                    </Suspense>
                </div>

            </div>

        </div>

    );
};