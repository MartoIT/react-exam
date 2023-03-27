import * as React from 'react';
import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";


import { AuthContext } from "../../context/authContext";
import { articlesServcicesFactory } from '../../services/articlesServices';

// const getOne = async (params) => {
//     const articlesServices = articlesServcicesFactory()
//     const result = await articlesServices.getOne(params)

//     return result;
// }

export const EditPost = ({
    onEditClick,
}) => {

    const { token, username } = useContext(AuthContext)
    const params = useParams();

    // const res = getOne(params.articleId)
    // .then(
    //    res => console.log(res), setForm(res)
    // )


    const [form, setForm] = React.useState({
        title: '',
        days: '',
        budget: '',
        imageUrl: '',
        story: '',
        username
    });
    
    

    useEffect( () => {
        async function getOne() {
            
            const articlesServices = articlesServcicesFactory()
            
            const result = await articlesServices.getOne(params.articleId)
           setForm(result)
           
        }
         getOne();
        
    }, [])

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };


    const onSubmit = async (e) => {

        e.preventDefault();
        onEditClick(form, token)

    };

    return (
        <section >
            <form method="post" style={{ margin: "90px 0", paddingLeft: "550px", display: "yable-row" }} onSubmit={onSubmit}>
                <div className="edit-page" >

                    <h1>New Blog Post Entry</h1>
                    <label htmlFor="title" className="color" style={{ display: "table-cell" }}>Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="input"
                        style={{ display: "table-cell" }}

                        value={form.title}
                        onChange={handleChange}

                    />

                    <label htmlFor="days" className="color" style={{ display: "table-cell" }}>Days:</label>
                    <input
                        type="text"
                        id="days"
                        name="days"
                        className="input"
                        style={{ display: "table-cell" }}
                        value={form.days}
                        onChange={handleChange}

                    />

                    <label htmlFor="budget" className="color" style={{ display: "table-cell" }}>Budget:</label>
                    <input
                        type="text"
                        id="budget"
                        name="budget"
                        className="input"
                        style={{ display: "table-cell" }}
                        value={form.budget}
                        onChange={handleChange}

                    />

                    <label htmlFor="img" className="color" style={{ display: "table-cell" }}>Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        className="input"
                        style={{ display: "table-cell" }}
                        value={form.imageUrl}
                        onChange={handleChange}

                    />
                    <p></p>
                    <label htmlFor="summary" className="color" >Post here:</label>
                    <textarea type="text"
                        id="story"
                        name="story"
                        className="textarea"
                        value={form.story}
                        onChange={handleChange} ></textarea>
                    <input className="btn btn-primary btn-block py-3 mybtn" type="submit" value="Send story" />

                </div>
            </form>
        </section>
    );
};