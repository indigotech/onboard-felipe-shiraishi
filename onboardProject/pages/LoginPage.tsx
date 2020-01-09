import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import { View, Alert, NavigatorIOS } from 'react-native';
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
<<<<<<< HEAD
import { validateLogin } from 'utils/validationUtils';
=======
import { NavigationComponent, NavigationNavigator, NavigationScreenProp, NavigationRoute } from 'react-navigation';
import {useNavigation} from '../hooks/hooks'

interface authPack {
    email: string;
    password: string;
    navigator: NavigationScreenProp<NavigationRoute, any>;
};

const validateLogin = (pack:authPack) => {
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
        pack.navigator.navigate("UsersList");
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
>>>>>>> Adds Page Routing

export const LoginPage = () => 
{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const navigator = useNavigation();

    return (
        <PageContainer>
            <H1>Bem-vindo(a) à Taqtile!</H1>
            <TextField 
                placeholder={"Nome de usuário"}
                onChangeText={(text:string) => onChangeEmail(text)}
                />
            <TextField 
                secure={true}
                placeholder={"Senha"}
                onChangeText={(text:string) => onChangePassword(text)}
                />
            <PrimaryButton label="Log in" onClick={() => validateLogin({email,password,navigator})}/>
        </PageContainer>
    )
};

LoginPage.navigationOptions = {
    title: 'LoginPage',
  };
export default LoginPage
