import {  useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const Post =  ({
    onPostSubmit,
}) => {
    
    const {  token } = useContext(AuthContext)

    const onSubmit = async (e) => {

        e.preventDefault();

        const data = {
            title: e.target.title.value,
            days: e.target.days.value,
            budget: e.target.budget.value,
            imageUrl: e.target.imageUrl.value,
            story: e.target.story.value,
            
        };
        onPostSubmit(data, token)

    };

    return (
        <section >
            <form  method="post" style={{ margin: "90px 0", paddingLeft: "550px", display: "yable-row" }} onSubmit={onSubmit}>
                <div className="edit-page" >

                    <h1>New Blog Post Entry</h1>
                    <label htmlFor="leg-title" className="color" style={{ display: "table-cell" }}>Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="input"
                        style={{ display: "table-cell" }}
                    //value={values.title}
                    //onChange={changeHandler}
                    />

                    <label htmlFor="category" className="color" style={{ display: "table-cell" }}>Days:</label>
                    <input
                        type="text"
                        id="days"
                        name="days"
                        className="input"
                        style={{ display: "table-cell" }}
                    // value={values.category}
                    // onChange={changeHandler}
                    />

                    <label htmlFor="levels" className="color"style={{ display: "table-cell" }}>Budget:</label>
                    <input
                        type="text"
                        id="budget"
                        name="budget"
                        className="input"
                        style={{ display: "table-cell" }}
                    //min="1"
                    // value={values.maxLevel}
                    // onChange={changeHandler}
                    />

                    <label htmlFor="game-img" className="color"style={{ display: "table-cell" }}>Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        className="input"
                        style={{ display: "table-cell" }}
                    // value={values.imageUrl}
                    // onChange={changeHandler}
                    />
                    <p></p>
                    <label htmlFor="summary" className="color" >Post here:</label>
                    <textarea name="summary" id="summary" className="textarea"></textarea>
                    <input className="btn btn-primary btn-block py-3 mybtn" type="submit" name="story" value="Send story" />

                </div>
            </form>
        </section>
    );
};