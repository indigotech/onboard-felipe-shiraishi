import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { client, storeData } from '../utils/apollo';
import gql from 'graphql-tag';

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
        throw ("Email inválido")
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

export const validateCPF = (cpf: string) => {
    const regexValidator = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{11}$)/
    const valid = regexValidator.test(cpf);
    if (!valid){
        throw ("CPF inválido")
    }
    return valid
}

export const validateBirthDate = (birth: string) => {
    const regexValidator = /(^\d{4}\/\d{2}\/\d{2}$)|(^\d{4}\-\d{2}\-\d{2}$)/
    const valid = regexValidator.test(birth)
    if (!valid){
        throw ("Data em formato inválido")
    }
    
    const today = new Date();
    const birthDate = new Date(birth);
    const minDate = new Date("1900/01/01");
    const validDate = ((today >= birthDate) && (birthDate >= minDate))

    if (!validDate){
        throw ("Data de nascimento no futuro")
    }

    return (valid && validDate)
}

export const formatsBirthDate = (birth:string) => {
    const year = birth.slice(0,4)
    const month = birth.slice(5,7)
    const day = birth.slice(8, 10)

    const result = year + '-' + month + '-' + day
    
    return result
}