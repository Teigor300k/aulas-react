import React, { createContext } from "react";

interface IUserLoggedContextData {
    userName: string;
}

interface IUserLoggedProviderProps {
    children: React.ReactNode;
}

export const UserLoggedContext = createContext<IUserLoggedContextData>({} as IUserLoggedContextData);

export const UserLoggedProvider: React.FC<IUserLoggedProviderProps> = ({ children }) => {
    return (
        <UserLoggedContext.Provider value={{ userName: "DayBlock" }}>
            {children}
        </UserLoggedContext.Provider>
    );
};
