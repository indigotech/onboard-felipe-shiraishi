import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Alert } from 'react-native';
import { client, storeData } from '../utils/apollo';
import gql from 'graphql-tag';
import { goToUsersList } from './navigation';
<<<<<<< HEAD
<<<<<<< HEAD
import UsersListPage from 'pages/UsersListPage';
=======
>>>>>>> Refactor after pr
=======
import UsersListPage from 'pages/UsersListPage';
>>>>>>> refactor after PR

export interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
    onLoad: (loading:boolean) => void;
};

<<<<<<< HEAD
<<<<<<< HEAD
export const mountLoginMutation = (email: string, password: string) => {
=======
const mountLoginMutation = (email: string, password: string) => {
>>>>>>> Refactor after pr
=======
export const mountLoginMutation = (email: string, password: string) => {
>>>>>>> refactor after PR
    return gql`
    mutation loginMutation {
        Login(data: {
            email: \"${email}\", 
            password: \"${password}\"
        })
        {
            token
<<<<<<< HEAD
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
=======
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

 export const doLogin = async (pack:authPack) => {
    try{
        const validEmail = validateEmail(pack.email)
        const validPassword = validatePassword(pack.password)

        if (validEmail && validPassword){
            pack.onLoad(true);
            await requestLogin(pack.email, pack.password)
            pack.onLoad(false)
            goToUsersList()
>>>>>>> Refactor after pr
        }
        catch {
            throw "Não foi possível se autenticar. Tente novamente."
        }
        
    }
<<<<<<< HEAD
    catch{
        throw "Credenciais inválidas"
=======
    catch (error){
        pack.onLoad(false)
        Alert.alert(error)
>>>>>>> Refactor after pr
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
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
}
>>>>>>> Refactor after pr
=======
}
>>>>>>> refactor after PR
