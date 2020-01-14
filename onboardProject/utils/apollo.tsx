import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { AsyncStorage } from "react-native";
import { ListProps } from "atomic/atm/atm.list/list.component";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://tq-template-server-sample.herokuapp.com/graphql"
    })
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
            return "Inexistent key"
        }
    }
    catch(error){}
};

const mountContext = (token:string) => {
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
                    }
                }
            }`

        const token = await fetchData("token")
        if(token === "Inexistent token"){
           throw Error("Inexistent token")
        }
        else if (token){
            const context = mountContext(token)
            const result = await client.query({ query: query, context: context })
            try{
                const data = result.data.Users.nodes
                return data
            }
            catch (error){
                return error
            }
        }
        
    }
    catch(error){
        return error
    }
}


