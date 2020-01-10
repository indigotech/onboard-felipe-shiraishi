import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import { AsyncStorage, Alert, NavigatorIOS } from 'react-native';
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { validateLogin } from 'utils/validationUtils';
=======
import { NavigationComponent, NavigationNavigator, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import {useNavigation} from '../hooks/hooks'
import gql from 'graphql-tag';
import { client, _storeData, _fetchData } from '../utils/apollo';

interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
    onLoad: (loading:boolean) => void;
};

 const validateLogin = (pack:authPack) => {
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
>>>>>>> Adds Page Routing
=======
import {useNavigation} from '../hooks/hooks'
import gql from 'graphql-tag';
import { client, _storeData, _fetchData } from '../utils/apollo';
import { validateLogin } from "../utils/validationUtils"
>>>>>>> Compliance to last PR

export const LoginPage = () => 
{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [loading, onLoad] = React.useState(false);

    const navigator = useNavigation();

    return (
        <PageContainer>
            <H1>Bem-vindo(a) à Taqtile!</H1>
            <TextField 
                placeholder={"Nome de usuário"}
                onChangeText={(text:string) => onChangeEmail(text.toLowerCase())}
                />
            <TextField 
                secure={true}
                placeholder={"Senha"}
                onChangeText={(text:string) => onChangePassword(text)}
                />
            <PrimaryButton loading={loading} label="Log in" onClick={
                () => validateLogin({email,password,navigator, onLoad})
                }/>
        </PageContainer>
    )
};

LoginPage.navigationOptions = {
    title: 'LoginPage',
  };
export default LoginPage
