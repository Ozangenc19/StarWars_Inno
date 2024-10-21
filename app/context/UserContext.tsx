import { createContext, ReactNode, useState } from "react";

type UserContextType = {
    faction: string;
    setFaction: (faction : string) => void;
}

// creation du context 
export const UserContext = createContext<UserContextType | undefined>(undefined);

// creation du provider
export const UserProvider = ({children}: {children: ReactNode}) => {

    const [faction, setFaction] = useState("");

    return (
        <UserContext.Provider value={{faction, setFaction }}>
            {children}
        </UserContext.Provider>

    )

}

