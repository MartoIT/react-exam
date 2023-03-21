
import * as request from './requester';

const baseUrl = "http://localhost:3030/data/packages";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    //const result = await request.get(baseUrl);
    //const packages = Object.values(result);
    
    return result;
};