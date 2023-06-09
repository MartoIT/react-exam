
import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/packages";

export const packagesServicessFactory = () => {

    const request = requestFactory();

    const getAll = async () => {
        
        const response = await request.get(`${baseUrl}`);
        const packages = Object.values(response);
        
        return packages;
    };

    return {
        getAll,
    }
}
 


