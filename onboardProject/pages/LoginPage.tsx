import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { doLogin } from '../utils/validationUtils';
import { useNavigation } from '../hooks/hooks';

export const LoginPage = () => 
{
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [loading, onLoad] = React.useState(false)

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
                () => doLogin({email,password,navigator, onLoad})
                }/>
        </PageContainer>
    )
};

LoginPage.navigationOptions = {
    title: 'LoginPage',
  };
export default LoginPage
