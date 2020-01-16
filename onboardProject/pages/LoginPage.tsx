import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { validateEmail, validatePassword, requestLogin } from '../utils/validationUtils';
import { useNavigation } from '../hooks/hooks';
import { goToUsersList } from '../utils/navigation';
import { StyleGuide } from '../StyleGuide';

export const LoginPage = () => 
{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoad] = React.useState(false);

    // Forms error filling
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [authError, setAuthError] = React.useState(false);

    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
    const [authErrorMessage, setAuthErrorMessage] = React.useState("");

    const navigator = useNavigation();

    const handleButtonTap = async () => {
        try{
            try{
                validateEmail(email)
                setEmailError(false);
            }
            catch (message){
                setEmailErrorMessage(message)
                setEmailError(true);
            }

            try{
                validatePassword(password)
                setPasswordError(false);
            }
            catch (message){
                setPasswordErrorMessage(message)
                setPasswordError(true)
            }
    
            setLoad(true);
            await requestLogin(email, password)
            setLoad(false)
            setAuthError(false)
            goToUsersList()

        } catch (error)
        {
            setAuthError(true)
            setAuthErrorMessage(error)
            setLoad(false)
        }
    }

    return (
        <PageContainer>
            <H1>Bem-vindo(a) à Taqtile!</H1>
            <TextField 
                label = {"Nome de usuário"}
                placeholder={"email@provider.com"}
                error={emailError}
                errorMessage={emailErrorMessage}
                onChange={(text:string) => setEmail(text.toLowerCase())}
                />
            <TextField 
                label = {"Senha"}
                secure={true}
                placeholder={"Senha"}
                error={passwordError}
                errorMessage={passwordErrorMessage}
                onChange={(text:string) => setPassword(text)}
                />
            <PrimaryButton loading={loading} label="Log in" onClick={handleButtonTap} 
            colorError={StyleGuide.errorColor} displayError={authError}
            errorMessage={authErrorMessage} />
        </PageContainer>
    )
};

LoginPage.navigationOptions = {
    title: 'LoginPage',
  };
export default LoginPage

