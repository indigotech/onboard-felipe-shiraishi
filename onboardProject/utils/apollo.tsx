import { ApolloClient, HttpLink, InMemoryCache, gql, createHttpLink, ApolloLink } from "@apollo/client";
import { AsyncStorage } from "react-native";
import { ListProps } from "atomic/atm/atm.list/list.component";
import { setContext } from "apollo-link-context"

const GRAPHQL_URL = "https://tq-template-server-sample.herokuapp.com/graphql"

const authContext = setContext(async (_, {headers}) => {
    const token = await fetchData('token');
    console.log(token)
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

export const fetchData = async (key:string) => {
    try{
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
        else{
            throw "Inexistent key"
        }
    }
    catch(error){}
};

export const mountContext = (token:string) => {
    return{
        headers: {
            Authorization: token
        }
    }
}

export const queryUsers = async (offset: number) => {
    try{
        const query = gql`{Users(offset:${offset}, limit:10){
                    nodes{
                        name
                        email
                        id
                    }
                }
            }`

        const token = await fetchData("token")
        if(token === "Inexistent token"){
           throw Error("Inexistent token")
        }
        else if (token){
            const result = await client.query({ query: query })
            const data = result.data.Users.nodes
            return data
        }
        
    }
    catch(error){
        console.log(error)
        return error
    }
}


