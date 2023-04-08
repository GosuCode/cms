import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//creating a context named "UserAuthContext" and exported it
export const UserAuthContext = createContext();


const UserAuthContextApi = ({ children }) => {
    const [Token, setToken] = useState("")
    const navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            navigate("/")
        } else {
            navigate("/login");
        }
    }, [localStorage])      //need to run only when localStorage changes
    return (
        <UserAuthContext.Provider
            value={{ name: 'alember', tkn: localStorage.getItem("token") }} //pass the value you need to pass to other component
        >
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContextApi
