import * as React from 'react';
import { useContext } from 'react';

import { AuthContext } from "../../context/authContext";

export const Post = ({
    onPostSubmit,
}) => {

    const { token, username } = useContext(AuthContext)

    const [form, setForm] = React.useState({
        title: '',
        days: '',
        budget: '',
        imageUrl: '',
        story: '',
        username
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        onPostSubmit(form, token)

    };

    return (
        <section >
            <form method="post" style={{ margin: "90px 0", paddingLeft: "550px", display: "yable-row" }} onSubmit={onSubmit}>
                <div className="edit-page" >

                    <h1>New Blog Post Entry</h1>
                    <label htmlFor="title" className="color" style={{ display: "table-cell" }}>Title:</label>
                    <input
                       
                        id="title"
                        name="title"
                        required="required"
                        className="input"
                        style={{ display: "table-cell"  }}
                        placeholder="Place" 
                        value={form.title}
                        onChange={handleChange}

                    />

                    <label htmlFor="days" className="color" style={{ display: "table-cell" }}>Days:</label>
                    <input
                        type="number"
                        id="days"
                        name="days"
                        required="required"
                        className="input"
                        style={{ display: "table-cell" }}
                        value={form.days}
                        placeholder="Number" 
                        onChange={handleChange}

                    />

                    <label htmlFor="budget" className="color" style={{ display: "table-cell" }}>Budget:</label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        required="required"
                        className="input"
                        style={{ display: "table-cell" }}
                        value={form.budget}
                        placeholder="Number" 
                        onChange={handleChange}

                    />

                    <label htmlFor="img" className="color" style={{ display: "table-cell" }}>Image:</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        required="required"
                        className="input"
                        style={{ display: "table-cell" }}
                        value={form.imageUrl}
                        placeholder="Url..." 
                        onChange={handleChange}

                    />
                    <p></p>
                    <label htmlFor="summary" className="color" >Post here:</label>
                    <textarea type="text"
                        id="story"
                        name="story"
                        required="required"
                        className="textarea"
                        value={form.story}
                        placeholder="Write your story here..." 
                        onChange={handleChange} ></textarea>
                    <input className="btn btn-primary btn-block py-3 mybtn" type="submit" value="Send story" />

                </div>
            </form>
        </section>
    );
};