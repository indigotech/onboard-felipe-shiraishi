import {  client } from "../utils/apolloUtils"
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
        const query = mountUserDetailQuery(id.id)
        const result = await client.query({ query: query })
        const data = result.data.User
        return data
    }
    catch(error){
        return error
    }
}