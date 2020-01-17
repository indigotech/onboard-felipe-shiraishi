import { ApolloClient, HttpLink, InMemoryCache, gql, createHttpLink, ApolloLink } from "@apollo/client";
import { AsyncStorage } from "react-native";
import { setContext } from "apollo-link-context"

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


export const storeData = async (key:string, value:string) => {
    try{
        await AsyncStorage.setItem(key, value);
    }
    catch(error){}
};

export const fetchToken = async () => {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
        return value;
    }
    else{
        throw "Inexistent key"
    }
};

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


