import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Alert } from 'react-native';
import { client, storeData } from '../utils/apollo';
import gql from 'graphql-tag';

export interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
    onLoad: (loading:boolean) => void;
};

 export const validateLogin = async (pack:authPack) => {
    try{
        const minimumSize = (pack.password.length >= 7);

        if (!validateEmail(pack.email)){
            Alert.alert("Email inválido " + pack.email)
        }
        else if (!validatePassword(pack.password)){
            Alert.alert("Pelo menos 1 número e 1 caractere")
        }
        else if (!minimumSize){
            Alert.alert("Senha muito curta (7 min.)")
        }
        else{
            const mutation = gql`
            mutation loginMutation {
                Login(data: 
                {
                    email: \"${pack.email}\", 
                    password: \"${pack.password}\"
                })
                {
                token
                }
            }
            `

            pack.onLoad(true);
            const result = await client.mutate({mutation: mutation})
            pack.onLoad(false)
            if (result.errors){
                Alert.alert("Credenciais inválidas")
            }
            else{
                await storeData("token", result.data.Login.token)
                pack.navigator.navigate("UsersList")
            }
        }
    }
    catch {
        pack.onLoad(false)
    }
}

const validateEmail = (email: string) => {
    const regexValidator = /.+[@].+\.com/;
    const valid = regexValidator.test(email);
    
    return valid;
}

const validatePassword = (password: string) => {
    const regexValidator = /(((.*[A-Z].*)|(.*[a-z].*))(.*[0-9].*)|(.*[0-9].*)((.*[A-Z].*)|(.*[a-z].*)))/;
    const valid = regexValidator.test(password);
    
    return valid;
}