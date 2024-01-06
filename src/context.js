import { createContext, useContext, useState } from 'react'

export const context = createContext();

const Provider = ({ children }) => {
   
    return (
        <>
            <context.Provider value={'hello'}>
                {children}
            </context.Provider>
        </>
    )
}

export const useContextProvider = () => {
    return useContext(context)
}

export default Provider