import { AsyncStorage } from "react-native";

export const storeData = async (key:string, value:string) => {
    try{
        await AsyncStorage.setItem(key, value);
    }
    catch(error){
        throw error
    }
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