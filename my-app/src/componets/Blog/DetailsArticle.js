

import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';




import { articlesServcicesFactory } from '../../services/articlesServices';
import { AuthContext } from '../../context/authContext';
import { formatDate } from './formData';
import { commentsServcicesFactory } from '../../services/comentsServices';
export const DetailsArticle = ({ onDeleteClick, onComentAdd }) => {

    const { userId, token, isAuthenticated, username, imageUrl } = useContext(AuthContext);
    const articleService = articlesServcicesFactory()
    const commnetServices = commentsServcicesFactory()
    const navigate = useNavigate();
    const { articleId } = useParams();
    const [article, setArticle] = useState({});
    const [comment, setComment] = useState('')


    const isOwner = article._ownerId === userId;
    
   

    useEffect(() => {
        articleService.getOne(articleId)
            .then(result => {
                setArticle(result);
            })
    }, [articleId]);

    useEffect(() => {
        commnetServices.getAll()
            .then(result => {
                const current = result.filter((c) => c.articleId === articleId)

                setComment(current);

            })

    }, []);

    const onDelete = async (e) => {

        e.preventDefault();
        let result = window.confirm(`Are you sure you want to delete this article?`);
        if (result) {
            const id = article._id;
            onDeleteClick(id, token)
        }


    };


    const onCommentSubmit = async (e) => {
        e.preventDefault();
        let comment = e.target.comment.value;

        const articleId = article._id;
        await commnetServices.addNewComent(imageUrl, username, articleId, comment, userId, token);

        commnetServices.getAll()
            .then(result => {
                const current = result.filter((c) => c.articleId === articleId)

                setComment(current);
            })
        let comment2 = e.target.comment;
        comment2.value = '';


    };

    const editComent = async (e) => {
        const commentId = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[2].textContent;
        const userId = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[3].textContent;

        const data = await commnetServices.getOne(commentId);
        const ownerId = data._ownerId
    }

    const onDeleteComment = async (e) => {
        const commentId = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[2].textContent;
        const userId = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[3].textContent;

        const data = await commnetServices.getOne(commentId);
        const ownerId = data._ownerId

        if (ownerId === userId) {
            let result = window.confirm(`Are you sure you want to delete this comment?`);

            if (result) {
                await commnetServices.deleteComment(commentId, token)

                commnetServices.getAll()
                    .then(result => {
                        const current = result.filter((c) => c.articleId === articleId)

                        setComment(current);
                    })
            }

        }
    }


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

                <div>

                </div>

                <div >
                    <h2>Comments:</h2>
                    <div className="container mt-5">


                        <div className="row  d-flex justify-content-center">

                            <div className="col-md-8">

                                {comment && Object.values(comment).map(x => (



                                    <div key={x._id} className="card p-3">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <div className="user d-flex flex-row align-items-center">

                                                <img src={x.imageUrl} width="80" className="user-img rounded-circle mr-2" alt='some' />
                                                <span><small className="font-weight-bold text-primary">{x.username}</small> <small className="font-weight-bold">{x.comment}</small></span>
                                                <div style={{ display: "none" }} className="userId">{x._id}</div>
                                                <div style={{ display: "none" }} className="userId">{x.userId}</div>
                                            </div>
                                            
                                            
                                           
                                        <div key={x._id} className="action d-flex justify-content-between mt-2 align-items-center">

                                            
                                            <div className="pen">
                                                <i className="fas fa-pen" onClick={editComent} ></i>
                                            </div>
                                            
                                            <div className="trashCan" onClick={onDeleteComment}>
                                                <i className='fa-solid fa-trash-can' ></i>
                                            </div>

                                        </div>
                                     
                                        </div>
                                        
                                        

                                    </div>
                                ))}


                            </div>

                        </div>

                    </div>

                    {!Object.values(comment).length && (
                        <div>
                            <p >0 comments yet</p>
                            <p >Be the first to comment</p>
                        </div>
                    )}
                </div>

                <p></p>
                <p></p>
                {isAuthenticated && (<div >
                    <div className="col-lg-5">
                        <div className="card-body rounded-bottom bg-white p-5" >
                            <form onSubmit={onCommentSubmit} >
                                <div className="form-group">
                                    <textarea className="form-control p-4" required="required" name="comment" placeholder="leave a comment..." rows="2" cols="15" />
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