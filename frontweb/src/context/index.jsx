import React, { createContext } from 'react';

export const context = createContext();

export const ContextProvider = props => {

    return (
        <context.Provider
        value={{}}
        >
            {props.children}
        </context.Provider>
    )
}