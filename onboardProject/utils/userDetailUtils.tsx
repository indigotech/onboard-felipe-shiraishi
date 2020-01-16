import { fetchData, mountContext, client } from "./apollo"
import gql from "graphql-tag"

export const mountUserDetailQuery = (id:number) => {
    const query = gql`{
        User (id:${id}){
            id,
            name,
            cpf,
            birthDate,
            email,
            role
      }}`
      return query
}

export const queryUser = async(id:any) => {
    try{
        const token = await fetchData("token")
        if(token === "Inexistent token"){
           throw Error("Inexistent token")
        }
        else if (token){
            const context = mountContext(token)
            const query = mountUserDetailQuery(id.id)
            const result = await client.query({ query: query, context: context })
            const data = result.data.User
            return data
        }
        
    }
    catch(error){
        return error
    }
}