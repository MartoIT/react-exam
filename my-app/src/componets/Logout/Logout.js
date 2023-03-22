import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/authContext'; 

export const Logout = () => {
    const { onLogout } = useContext(AuthContext);
    
    useEffect(() => {
        onLogout();
    }, [onLogout]);
    
};