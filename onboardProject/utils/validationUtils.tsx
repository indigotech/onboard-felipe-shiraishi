import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Alert } from 'react-native';
import { client, _storeData, _fetchData } from '../utils/apollo';
import gql from 'graphql-tag';

export interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
    onLoad: (loading:boolean) => void;
};

 export const validateLogin = (pack:authPack) => {
    const minimumSize = (pack.password.length >= 7);
    let loginSuccess = false;

    const onLoginStatusChange = (state:boolean) => {
        loginSuccess = state;

    }

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
        onLoginStatusChange(true);
        client.mutate({mutation: mutation}
        ).then(result => _storeData("token", result.data.Login.token)
        ).catch(error => onLoginStatusChange(false)
        ).then(() => pack.onLoad(false)
        ).then(() => loginSuccess ? pack.navigator.navigate("UsersList") : Alert.alert("Credenciais inválidas"))
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