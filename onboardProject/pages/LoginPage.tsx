import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import { View } from 'react-native';

export const LoginPage = () => 
{
    return (
        <View
            style = {{
                flex: 1,
                padding: 16,
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "#FFF"
            }}
        >
            <H1>Bem-vindo(a) à Taqtile!</H1>
            <TextField placeholder={"Nome de usuário"}/>
            <TextField secure={true} placeholder={"Senha"}/>
            <PrimaryButton label="Log in"/>
        </View>
    )
}; export default LoginPage
