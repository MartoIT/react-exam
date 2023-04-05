import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const commentsServcicesFactory = () => {
    const request = requestFactory();

    const getAll = async () => {
   
        const response = await request.get(`${baseUrl}`);
        const comments = Object.values(response);
        
        return comments;
    };

    const addNewComent = async (imageUrl, username, articleId, comment, userId, token) => {
        const data = {
            articleId,
            comment,
            username,
            imageUrl,
            userId
            
        }

        
        const response = await request.post(`${baseUrl}`, data, token);
        const result = Object.values(response);
        
        return result;
    };

    const deleteComment = async (comentId, token) => {

        
        const result = await request.del(`${baseUrl}/${comentId}`, token);

        return result;
    }

    const getOne = async (articleId) => {
        const result = await request.get(`${baseUrl}/${articleId}`);

        return result;
    };

    const edit = async (data, token) => {

    

        const comentId = data._id;
        
        const result = await request.put(`${baseUrl}/${comentId}`, data, token);
        
    }

    return {
        getAll,
        addNewComent,
        deleteComment,
        getOne,
        edit
    };
};