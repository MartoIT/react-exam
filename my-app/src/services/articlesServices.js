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

        if (data.title === '' || data.title === undefined || data.title === null) {
            return alert(`Please add title...`)
        }

        if ( data.days === '' || data.days === undefined || data.days === null) {
            return alert(`Days must be number`)
        }

        if ( data.budget === '' || data.budget === undefined || data.budget === null) {
            return alert(`Budget must be number`)
        }

        if (data.imageUrl === '' || data.imageUrl === Number || data.imageUrl === undefined || data.imageUrl === null) {
            return alert(`Please provide a valid URL`)
        }

        if (data.story === '' || data.story === undefined || data.story === null) {
            return alert(`Please add some story...`)
        }

        if( data.username === '' || data.username === undefined || data.username === null){
            return alert(`Some data are not valid!`)
        }
      
           
       

        const response = await request.post(`${baseUrl}`, data, token);
        const articles = Object.values(response);

        return articles;
    };
    const getOne = async (articleId) => {
        const result = await request.get(`${baseUrl}/${articleId}`);

        return result;
    };

    const deleteArticle = async (articleId, token) => {


        const result = await request.del(`${baseUrl}/${articleId}`, token);

        return result;
    }

    const edit = async (data, token) => {

        if (data.title === '' || data.title === undefined || data.title === null) {
            return alert(`Please add title...`)
        }

        if ( data.days === '' || data.days === undefined || data.days === null) {
            return alert(`Days must be number`)
        }

        if ( data.budget === '' || data.budget === undefined || data.budget === null) {
            return alert(`Budget must be number`)
        }

        if (data.imageUrl === '' || data.imageUrl === Number || data.imageUrl === undefined || data.imageUrl === null) {
            return alert(`Please provide a valid URL`)
        }

        if (data.story === '' || data.story === undefined || data.story === null) {
            return alert(`Please add some story...`)
        }

        if( data.username === '' || data.username === undefined || data.username === null){
            return alert(`Some data are not valid!`)
        }
      
        

        const articleId = data._id
        const result = await request.put(`${baseUrl}/${articleId}`, data, token);
    }

    return {
        getAll,
        addNewPost,
        getOne,
        edit,
        delete: deleteArticle,
    }
}

