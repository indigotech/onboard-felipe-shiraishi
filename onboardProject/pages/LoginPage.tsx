import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { TextField } from '../atomic/atm/atm.input/input.component'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { validateEmail, validatePassword, requestLogin } from '../utils/validationUtils';
=======
import { doLogin } from '../utils/validationUtils';
>>>>>>> Refactor after pr
import { useNavigation } from '../hooks/hooks';
=======
import { doLogin, validateEmail, validatePassword, requestLogin } from '../utils/validationUtils';
import { useNavigation } from '../hooks/hooks';
import { goToUsersList } from '../utils/navigation';
>>>>>>> refactor after PR
import { Alert } from 'react-native';

export const LoginPage = () => 
{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoad] = React.useState(false)
<<<<<<< HEAD
=======

    const handleButtonTap = async () => {
        try{
            const validEmail = validateEmail(email)
            const validPassword = validatePassword(password)
    
            setLoad(true);
            if (validEmail && validPassword){
                await requestLogin(email, password)
                setLoad(false)
                goToUsersList()
        }
        } catch (error)
        {
            Alert.alert(error)
            setLoad(false)
        }
    }
>>>>>>> refactor after PR

    const navigator = useNavigation();

    const handleButtonTap = async () => {
        try{
            const validEmail = validateEmail(email)
            const validPassword = validatePassword(password)
    
            setLoad(true);
            if (validEmail && validPassword){
                await requestLogin(email, password)
                setLoad(false)
                navigator.navigate("UsersList")
                //goToUsersList()
        }
        } catch (error)
        {
            Alert.alert(error)
            setLoad(false)
        }
    }

    return (
        <PageContainer>
            <H1>Bem-vindo(a) à Taqtile!</H1>
            <TextField 
                placeholder={"Nome de usuário"}
                onChangeText={(text:string) => setEmail(text.toLowerCase())}
                />
            <TextField 
                secure={true}
                placeholder={"Senha"}
                onChangeText={(text:string) => setPassword(text)}
                />
<<<<<<< HEAD
<<<<<<< HEAD
            <PrimaryButton loading={loading} label="Log in" onClick={handleButtonTap}/>
=======
            <PrimaryButton loading={loading} label="Log in" onClick={
                () => doLogin({email,password,navigator, onLoad})
                }/>
>>>>>>> Add Users list load by graphql
=======
            <PrimaryButton loading={loading} label="Log in" onClick={handleButtonTap}/>
>>>>>>> refactor after PR
        </PageContainer>
    )
};

LoginPage.navigationOptions = {
    title: 'LoginPage',
  };
export default LoginPage

