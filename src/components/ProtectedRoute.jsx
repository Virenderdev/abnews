import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import api from "../../../frontend/src/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../../../frontend/src/constants';
import { useState, useEffect } from 'react';

 export function ProtectedRoute({children}) {
    const [isAthorized, setIsAuthorised] = useState(null);
   
    useEffect(() => {
        auth().catch(() => setIsAuthorised(false))
    },[])
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
           const res = await api.post("/api/token/refresh/", {refresh: refreshToken});

           if (res.status=== 200){
            // localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            setIsAuthorised(true);
           } else {
            setIsAuthorised(false);
           }
        } catch(error) {
            console.log(error)
            setIsAuthorised(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorised(false);
            return 
        }
        const decodedToken = jwtDecode(token);
        const tokenExpiration = decodedToken.exp
        const now = Date.now() / 1000

        if(tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAuthorised(true)
        }
    }

    if (isAthorized === null) {
        return <div>Loading...</div>
    }

    return isAthorized ? children : <Navigate to="/login" />
}