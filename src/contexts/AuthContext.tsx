import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UserLogin"
import { login } from "../services/Service"
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    isOpen: boolean,
    handleIsOpen: () => void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [isOpen, setIsOpen] = useState(false)

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    function handleIsOpen() {
        setIsOpen(!isOpen)
    }

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            const response = await login(`/usuarios/logar`, userLogin, setUsuario)
            console.log(response);
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            handleLogin,
            handleLogout,
            isLoading,
            isOpen,
            handleIsOpen
        }}>
            {children}
        </AuthContext.Provider>
    )
}