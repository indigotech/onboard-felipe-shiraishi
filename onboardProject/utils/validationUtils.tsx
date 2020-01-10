import { Alert } from "react-native";


export interface authPack {
    email: string;
    password: string;
};

export const validateLogin = (pack:authPack) => {
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
        Alert.alert("Sucesso");
    }
}

const validateEmail = (email: string) => {
    const regexValidator = /.+[@].+\.com/;
    const valid = regexValidator.test(email);
    
    return valid;
}

const validatePassword = (password: string) => {
    const regexValidator = /((.*[A-Z].*)|(.*[a-z].*))(.*[0-9].*)/;
    const valid = regexValidator.test(password);
    
    return valid;
}