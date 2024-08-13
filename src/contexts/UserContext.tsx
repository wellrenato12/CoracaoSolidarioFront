import { useState, createContext, ReactNode } from "react";

interface UserContextType {
    nome:string;
    setNome: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
    nome: "",
    setNome: () => {}
});

interface UserProviderProps {
    children: ReactNode;
}

function UserProvider ({ children } : UserProviderProps ) {
    const [nome, setNome] = useState("");

    return (
        <UserContext.Provider value={{ nome, setNome }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;