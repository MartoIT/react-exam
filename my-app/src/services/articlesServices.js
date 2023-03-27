import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/articles";

export const articlesServcicesFactory = () => {

    const request = requestFactory();

    const getAll = async () => {
   
        const response = await request.get(`${baseUrl}`);
        const packages = Object.values(response);
        
        return packages;
    };

    const addNewPost = async (data, token) => {
   
        const response = await request.post(`${baseUrl}`, data, token);
        const articles = Object.values(response);
        
        return articles;
    };
    const getOne = async (articleId) => {
        const result = await request.get(`${baseUrl}/${articleId}`);
    
        return result;
    };

    const deleteArticle = async (articleId, token) => {
        console.log(articleId, token)
        
        const result = await request.del(`${baseUrl}/${articleId}`, token);
       
        return result;
    }

    return {
        getAll,
        addNewPost,
        getOne,
        delete: deleteArticle,
    }
}
 
