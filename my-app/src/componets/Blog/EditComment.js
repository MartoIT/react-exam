import * as React from 'react';
import {useState,  useEffect, useContext } from 'react';

import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";


export const EditComment = () => {
    const location = useLocation();
    const currentData = location.state;
    const currentComment = currentData.comment
    const { token, username } = useContext(AuthContext)
    const [form, setForm] = useState('');

    
    useEffect(() => {

        setForm(currentComment)


    })
    const handleChange = (event) => {
        setForm(event.target.value,
        );
    };

    const onSubmit = async (e) => {

        e.preventDefault();
       console.log(form)

    };


    //console.log(location.state)
    return (
        <section >
            <form method="post" style={{ margin: "90px 0", paddingLeft: "550px", display: "yable-row" }}  onSubmit={onSubmit}>
                <div className="edit-page" >
                    <p></p>
                    <label htmlFor="summary" className="color" >Edit comment:</label>
                    <textarea type="text"
                        id="story"
                        name="story"
                        className="textarea"
                        value={currentComment}
                        onChange={handleChange}
                    ></textarea>
                    <input className="btn btn-primary btn-block py-3 mybtn" type="submit" value="Send" />

                </div>
            </form>
        </section>
    );
};
