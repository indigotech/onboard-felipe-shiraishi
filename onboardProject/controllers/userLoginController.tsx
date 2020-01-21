import gql from "graphql-tag"
import { client } from "../utils/apolloUtils"
import { stripIgnoredCharacters } from "graphql"
import { storeData } from "../utils/dataUtils"

export interface authPack {
    email: string;
    password: string;
    onLoad: (loading:boolean) => void;
};

export const mountLoginMutation = (email: string, password: string) => {
    return gql`
    mutation loginMutation {
        Login(data: {
            email: \"${email}\", 
            password: \"${password}\"
        })
        {
            token
        }
    }
    `
}

export const requestLogin = async (email:string, password:string) => {
    const mutation = mountLoginMutation(email, password)
    try{
        const result = await client.mutate({mutation: mutation})
        try {
            await storeData("token", result.data.Login.token)
        }
        catch {
            throw "Não foi possível se autenticar. Tente novamente."
        }
        
    }
    catch{
        throw "Credenciais inválidas"
    }
}