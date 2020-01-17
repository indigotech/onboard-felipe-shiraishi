import { ApolloClient, InMemoryCache, gql, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context"
import { fetchToken } from "./dataUtils";

const GRAPHQL_URL = "https://tq-template-server-sample.herokuapp.com/graphql"

const authContext = setContext(async (_, {headers}) => {
    const token = await fetchToken();
    return {
        headers:{
            ...headers,
            Authorization: (token ? token : "")
        }
    }
    
})

const httpLink = createHttpLink({uri: GRAPHQL_URL});

export const client = new ApolloClient({
    link: authContext.concat(httpLink),
    cache: new InMemoryCache()
});





