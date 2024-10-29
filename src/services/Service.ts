/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
    // baseURL: 'http://localhost:8080/'
})


export const cadastrarUsuario = async(url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const buscar = async(url: string, setDados: Function, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }
  
  export const cadastrar = async(url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
  }
  
  export const atualizar = async(url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
  }
  
  export const deletar = async(url: string, header: object) => {
    await api.delete(url, header)
  }