import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
const [username, setUsername] = useState("");
    useEffect(() => {
        //tokennya ada ga? klo ga ada maka:
        const token = localStorage.getItem("token")
        if (token) {
            setUsername(getUsername(token));
        } else {
            window.location.href = "/login"
        }
        
        
    }, []);

    // jika ada maka dia akan nge return :
    return username;
};