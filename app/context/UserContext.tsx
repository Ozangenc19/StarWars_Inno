import { createContext, ReactNode, useState } from "react";

type UserContextType = {
    faction: string;
    character: string;
    planet: string;
    setFaction: (faction : string) => void;
    setCharacter: (character : string) => void;
    setPlanet: (planet : string) => void;

}

// creation du context 
export const UserContext = createContext<UserContextType | undefined>(undefined);

// creation du provider
export const UserProvider = ({children}: {children: ReactNode}) => {

    const [faction, setFaction] = useState("");
    const [character, setCharacter] = useState("");
    const [planet, setPlanet] = useState("");


    return (
        <UserContext.Provider value={{faction, character, planet,  setFaction, setCharacter, setPlanet }}>
            {children}
        </UserContext.Provider>

    )

}

