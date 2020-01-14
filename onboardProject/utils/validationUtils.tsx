import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Alert } from 'react-native';
import { client, storeData } from '../utils/apollo';
import gql from 'graphql-tag';
import { goToUsersList } from './navigation';

export interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
    onLoad: (loading:boolean) => void;
};

const mountLoginMutation = (email: string, password: string) => {
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

const requestLogin = async (email:string, password:string) => {
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

 export const doLogin = async (pack:authPack) => {
    try{
        const validEmail = validateEmail(pack.email)
        const validPassword = validatePassword(pack.password)

        if (validEmail && validPassword){
            pack.onLoad(true);
            await requestLogin(pack.email, pack.password)
            pack.onLoad(false)
            goToUsersList()
        }
    }
    catch (error){
        pack.onLoad(false)
        Alert.alert(error)
    }
}

const validateEmail = (email: string) => {
    const regexValidator = /.+[@].+\.com/;
    const valid = regexValidator.test(email);
    if (!valid){
        throw ("Email inválido " + email)
    }
    return valid
}

const validatePassword = (password: string) => {
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
