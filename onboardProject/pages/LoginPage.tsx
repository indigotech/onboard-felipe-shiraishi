import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { validateEmail, validatePassword } from '../utils/validationUtils';
import { goToUsersList } from '../utils/navigationUtils';
import { StyleGuide } from '../StyleGuide';
import { requestLogin } from '../controllers/userLoginController';

export const LoginPage = () => 
{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoad] = React.useState(false);

    // Forms error filling
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [authError, setAuthError] = React.useState("");

    const Fields = {
        Email: "Email", 
        Password: "Password"
    }

    const formsState = {
        Email: email,
        Password: password
    }

    const errorSetters = {
        Email: setEmailError,
        Password: setPasswordError
    }

    const validators = {
        Email: validateEmail,
        Password: validatePassword
    }

    const validateForm = () => {
        Object.values(Fields).forEach(field => {
            const validator = validators[field]
            const toValidate = formsState[field]
            const setError = errorSetters[field]
            setError(validator(toValidate))
        });
    }

    const handleButtonTap = async () => {
        try{
            validateForm()

            if (emailError !== "" || passwordError !== ""){
                throw Error
            }
    
            setLoad(true);
            await requestLogin(email, password)
            setLoad(false)
            setAuthError("")
            goToUsersList()

        } catch (error)
        {
            setAuthError("Não foi possível realizar login")
            setLoad(false)
        }
    }

    return (
        <PageContainer>
            <H1>Bem-vindo(a) à Taqtile!</H1>
            <TextField 
                label = {"Nome de usuário"}
                placeholder={"email@provider.com"}
                errorMessage={emailError}
                onChange={(text:string) => setEmail(text.toLowerCase())}
                />
            <TextField 
                label = {"Senha"}
                secure={true}
                placeholder={"Senha"}
                errorMessage={passwordError}
                onChange={(text:string) => setPassword(text)}
                />
            <PrimaryButton loading={loading} label="Log in" onClick={handleButtonTap} 
            colorError={StyleGuide.errorColor} 
            errorMessage={authError} />
        </PageContainer>
    )
};

export default LoginPage

