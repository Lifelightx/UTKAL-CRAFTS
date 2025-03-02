import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const StoreContext = createContext()

export const StoreContextProvider = ({children})=>{
    const url = "http://localhost:5000/api"
    const [token, setToken] = useState("")

    useEffect(()=>{
        const storedToken = localStorage.getItem("token")
        if(storedToken){
            setToken(storedToken)
        }
    },[token])
    const contextVal = {
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextVal}>
            {children}
        </StoreContext.Provider>
    )
}