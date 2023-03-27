import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';



import { articlesServcicesFactory } from '../../services/articlesServices';
import { AuthContext } from '../../context/authContext';
import { formatDate } from './formData';
export const DetailsArticle = ({ onDeleteClick, }) => {

    const { userId, token, isAuthenticated } = useContext(AuthContext);
    const articleService = articlesServcicesFactory()
    const navigate = useNavigate();
    const { articleId } = useParams();
    const [article, setArticle] = useState({});

    const isOwner = article._ownerId === userId;

    useEffect(() => {
        articleService.getOne(articleId)
            .then(result => {
                setArticle(result);
            })
    }, [articleId]);


    const onDelete = async (e) => {

        e.preventDefault();
        const id = article._id;
        onDeleteClick(id, token)

    };


    return (
        <>

            <div className="content-wrapper">
                <section id="main-content">
                    <div className="row" style={{ maxWidth: "80rem" }}>
                        <div className="large-9 columns" style={{
                            width: "75%", position: "relative", paddingLeft: "0.9375rem",
                            paddingRight: "0.9375rem", float: "left"
                        }} >
                            <article>
                                <h1 style={{ color: "#34ce57" }}>{article.title}</h1>
                                <p className="article_pub-date" style={{ color: "#949494" }}>Published
                                    <time > {formatDate(article._createdOn)}</time>
                                </p>
                                <div className="row" style={{ maxWidth: "80rem" }}>
                                    <div className="large-12 columns" style={{
                                        width: "100%", position: "relative", paddingLeft: "5rem",
                                        paddingRight: "0.9375rem", float: "left"
                                    }}>
                                        <img className="float-right" style={{ float: "right", width: "600px" }} src={article.imageUrl} alt="fluid" />
                                        <p>{article.story}</p>
                                    </div>
                                </div>

                            </article>


                        </div>
                    </div>
                    <div style={{
                        position: "relative", paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                    }}>
                        <section>
                            <button className="mybtn color" onClick={() => navigate(-1)} >Back</button>
                            {isOwner && (
                                <div>
                                    <div>
                                        <Link to={`/details/${article._id}/edit`}>
                                        <button className="mybtn color" >Edit</button>
                                        </Link>
                                    </div>
                                    <button className="mybtn color" onClick={onDelete}>Delete</button>
                                </div>
                            )}
                        </section>


                    </div>
                </section>
                <p></p>
                <p></p>
                {isAuthenticated && (<div >
                    <div className="col-lg-5">
                        <div className="card-body rounded-bottom bg-white p-5" >
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control p-4" name="comment" placeholder="leave a comment..." rows="2" cols="15" />
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">Send</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>)}

                {!isAuthenticated && (
                    <div>
                        <p style={{ margin: "10px" }}>You must be logged in to comment.<Link to={"/Login"}>Log in</Link></p>
                    </div>
                )}


            </div>

        </>

    );
}; 