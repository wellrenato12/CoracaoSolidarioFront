import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UserLogin"
import { buscar, login } from "../services/Service"
import { toastAlerta } from "../util/toastAlerta"
import type Usuario from "../models/User"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    isOpen: boolean,
    handleIsOpen: () => void
    getUsers: () => void
    users: Usuario[]
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [users, setUsers] = useState<Usuario[]>([])

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    const token = usuario.token;


    function handleIsOpen() {
        setIsOpen(!isOpen)
    }

    async function getUsers() {
        setIsLoading(true)
        try {
            await buscar(`/usuarios/all`, setUsers, {
                headers: {
                    Authorization: token,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso", 'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes", 'info')
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
            handleIsOpen,
            getUsers,
            users
        }}>
            {children}
        </AuthContext.Provider>
    )
}