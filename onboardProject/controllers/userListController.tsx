import gql from "graphql-tag"
import { client } from "../utils/apolloUtils"

const mountQueryUsers = (offset: number) => {
    return (gql`{Users(offset:${offset}, limit:10){
            nodes{
                name
                email
                id
            }
        }
    }`)
}

export const queryUsers = async (offset: number) => {
    try{
        const query = mountQueryUsers(offset)
        const result = await client.query({ query: query })
        const data = result.data.Users.nodes
        return data
    }
    catch(error){
        return error
    }
}

