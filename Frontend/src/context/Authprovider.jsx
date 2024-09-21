import React, { createContext } from 'react'
import { useContext, useState } from 'react';

export const Authcontext = createContext()
export default function Authprovider({children}){
    const initialAuth = localStorage.getItem("Users")
    const [authUser, setauthUser] = useState(
        initialAuth ? JSON.parse(initialAuth) : undefined
    );
    return(
        <Authcontext.Provider value= {[ authUser,setauthUser]}>
            {children}
        </Authcontext.Provider>
    )
}
export const useAuth = () => useContext(Authcontext)