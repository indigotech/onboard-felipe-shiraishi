import {userInput} from "../pages/CreateUserPage"
import { fetchData, mountContext, client } from "./apollo"
import gql from "graphql-tag"


export const mountCreateUserMutation = (input: userInput) => {
    return gql`
    mutation creationMutation{
        UserCreate(data:{
          name: \"${input.name}\",
          email: \"${input.email}\",
          cpf:\"${input.cpf}\",
          birthDate:\"${input.birthDate}\",
          password:\"${input.password}\",
          role: ${input.role}
        })
        {
          id
        }
      }
    `
}

export const requestUserCreation = async (input:userInput) => {
    const mutation = mountCreateUserMutation(input)

    try{
        const token = await fetchData("token")
        if(token === "Inexistent token"){
           throw Error("Inexistent token")
        }
        else if (token){
            const context = mountContext(token)
            const result = await client.mutate({ mutation: mutation, context: context })
            const data = result.data.UserCreate.id
            return data
        }
        
    }
    catch(error){
        return error
    }
}