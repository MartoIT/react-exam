
import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/review";

export const reviewServicessFactory = () => {

    const request = requestFactory();

    const getAll = async () => {
        
        const response = await request.get(`${baseUrl}`);
        const packages = Object.values(response);
        
        return packages;
    };

    const addReview = async (data, token) => {

        const response = await request.post(`${baseUrl}`, data, token);
        const articles = Object.values(response);

        return articles;
    };

    return {
        getAll,
        addReview,
    }
}
 


