"use client";

import React, { createContext, useState } from 'react';


interface storeContextProvider {
    children: React.ReactNode
}

interface storeProps {
    pin: number,
    setPin: Function
}


export const store = createContext<storeProps | null>(null);


export default function storeContextProvider({ children }: storeContextProvider) {
    const [pin, setPin] = useState(123456)

    return (
        <store.Provider
            value={{ pin, setPin }}>
            {children}
        </store.Provider>
    );
}




