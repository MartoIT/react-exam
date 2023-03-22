import { requestFactory } from "./requester";

const baseUrl = 'hhtp://localhost:3030/users';

export const authServicesFactory = () => {
    const request = requestFactory();

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`)
    }
}