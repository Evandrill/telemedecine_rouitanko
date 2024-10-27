import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserContext provider component
const UserProvider = ({ children }) => {
    const [userImage, setUserImage] = useState({
        avatar: "", // Default avatar can be set to empty initially
    });

    return (
        <UserContext.Provider value={{ userImage, setUserImage }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
