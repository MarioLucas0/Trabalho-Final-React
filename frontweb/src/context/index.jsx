import React, { createContext, useState } from 'react';

export const context = createContext();

export const ContextProvider = props => {
    const [produto,setProduto] = useState([])

    return (
        <context.Provider
        value={{
            produto,
            setProduto
        }}
        >
            {props.children}
        </context.Provider>
    )
}