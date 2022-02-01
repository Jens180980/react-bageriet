import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [loginData, setLoginData] = useState('')

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }  else {
            setLoginData('')
        }  
    }, [children])

    return(
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}