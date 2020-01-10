import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import { View, Alert } from 'react-native';
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { validateLogin } from 'utils/validationUtils';

export const LoginPage = () => 
{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

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
            <PrimaryButton label="Log in" onClick={() => validateLogin({email,password})}/>
        </PageContainer>
    )
}; export default LoginPage
