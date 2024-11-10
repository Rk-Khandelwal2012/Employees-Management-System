import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
// localStorage.clear()

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: []});

    useEffect(() => {
        const storedData = getLocalStorage();
        if (storedData) {
            const { employees = [] } = storedData;
            setUserData(employees);
        } else {
            // Optional: handle the case where localStorage is empty or invalid
            setUserData( employees);
        }
    }, []);

    useEffect(() => {
        setLocalStorage(userData); // Store updates in localStorage if needed
    }, [userData]);

    return (
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;