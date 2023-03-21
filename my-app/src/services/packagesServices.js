
//import * as request from './requester';

const baseUrl = "http://localhost:3030/data";

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/packages`);
    const result = await response.json();

    //const result = await request.get(baseUrl);
    //const packages = Object.values(result);
    
    return result;
};

export const getAllSer = async () => {
    const response = await fetch(`${baseUrl}/services`);
    const result = await response.json();

    //const result = await request.get(baseUrl);
    //const packages = Object.values(result);
    
    return result;
};

