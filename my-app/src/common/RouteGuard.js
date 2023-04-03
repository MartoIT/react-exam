import {useContext} from 'react'
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/authContext";

export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = useContext(AuthContext);
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};