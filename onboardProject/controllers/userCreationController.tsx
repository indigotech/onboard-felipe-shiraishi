import {userInput} from "../pages/CreateUserPage"
import { client } from "../utils/apolloUtils"
import gql from "graphql-tag"

const mutation = gql`
mutation creationMutation($data: UserInput!) {
    UserCreate(data: $data) {
      id
    }
  }
`

export const requestUserCreation = async (input: userInput): Promise<string> => {
  const result = await client.mutate({ mutation: mutation, variables: input })
  return result.data.UserCreate.id;
}