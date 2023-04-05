import * as React from 'react';
import {useState,  useEffect, useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import { commentsServcicesFactory } from '../../services/comentsServices';


export const EditComment = () => {
    const location = useLocation();
    const currentData = location.state;
    const currentComment = currentData.comment
    const navigate = useNavigate();
    const commnetServices = commentsServcicesFactory();


    const { token, username } = useContext(AuthContext)
    
   
    const [form, setForm] = React.useState({
        currentComment: ''
    });
    
    
    useEffect( () => {
        setForm(currentComment)
    }, [])

    const handleChange = (event) => {
        setForm(
           
             event.target.value,
        );
    };

    


    const onSubmit = async (e) => {

        e.preventDefault();
        let data = currentData
        currentData.comment = form;
        const result = await commnetServices.edit(data, token )
        navigate(-1)
    };


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
                        defaultValue={currentComment}
                        onChange={handleChange}
                        
                    ></textarea>
                    <input className="btn btn-primary btn-block py-3 mybtn" type="submit" value="Send" />

                </div>
            </form>
        </section>
    );
};

