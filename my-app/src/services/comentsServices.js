import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const commentsServcicesFactory = () => {
    const request = requestFactory();

    const getAll = async () => {
   
        const response = await request.get(`${baseUrl}`);
        const comments = Object.values(response);
        
        return comments;
    };

    const addNewComent = async (username, articleId, comment, token) => {
        const data = {
            articleId,
            comment,
            username
        }

        
        const response = await request.post(`${baseUrl}`, data, token);
        const result = Object.values(response);
        
        return result;
    };

    return {
        getAll,
        addNewComent
    };
};