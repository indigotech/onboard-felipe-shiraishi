import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Alert } from 'react-native';
import { client, storeData } from '../utils/apollo';
import gql from 'graphql-tag';
import UsersListPage from 'pages/UsersListPage';

export interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
    onLoad: (loading:boolean) => void;
};

export const mountLoginMutation = (email: string, password: string) => {
    return gql`
    mutation loginMutation {
        Login(data: {
            email: \"${email}\", 
            password: \"${password}\"
        })
        {
            token
        }
    }
    `
}

export const requestLogin = async (email:string, password:string) => {
    const mutation = mountLoginMutation(email, password)
    try{
        const result = await client.mutate({mutation: mutation})
        try {
            await storeData("token", result.data.Login.token)
        }
        catch {
            throw "Não foi possível se autenticar. Tente novamente."
        }
        
    }
    catch{
        throw "Credenciais inválidas"
    }
}

export const validateEmail = (email: string) => {
    const regexValidator = /.+[@].+\.com/;
    const valid = regexValidator.test(email);
    if (!valid){
        throw ("Email inválido " + email)
    }
    return valid
}

export const validatePassword = (password: string) => {
    const regexValidator = /(((.*[A-Z].*)|(.*[a-z].*))(.*[0-9].*)|(.*[0-9].*)((.*[A-Z].*)|(.*[a-z].*)))/;
    const valid = regexValidator.test(password);
    if (!valid){
        throw ("Pelo menos 1 número e 1 caractere")
    }
    const minimumSize = (password.length >= 7);
    if (!minimumSize){
        throw ("Senha muito curta (7 min.)")
    }
    return valid && minimumSize  
}

