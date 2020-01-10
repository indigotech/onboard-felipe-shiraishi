import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { AsyncStorage } from "react-native";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "https://tq-template-server-sample.herokuapp.com/graphql"
    })
});

export const _storeData = async (key:string, value:string) => {
    try{
        await AsyncStorage.setItem(key, value);
    }
    catch(error){}
};

export const _fetchData = async (key:string) => {
    try{
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return new Promise(resolve => {resolve(value)});
        }
    }
    catch(error){}
};