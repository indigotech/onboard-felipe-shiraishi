import React, { useEffect, SetStateAction, useState } from 'react';
import {H1, H2, InputLabel} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { ColorPropType, Alert, RefreshControlBase } from 'react-native';
import { TextField, PickerField } from '../atomic/atm/atm.input/input.component'
import PrimaryButton from '../atomic/atm/atm.button/button.component'
import { validateBirthDate, validateEmail, validatePassword, validateCPF } from '../utils/validationUtils';
import { formatsBirthDate } from '../utils/validationUtils'
import { requestUserCreation } from '../utils/userCreationUtils'
import { userInput } from './CreateUserPage';
import {queryUser} from '../utils/userDetailUtils'
import LoadingIcon from '../atomic/atm/atm.loadingIcon/loadingIcon.component';

export const UserDetailsPage = (id:number) => 
{
    useEffect(() => {
        queryUser(id).then(result => setData(result)).catch(error => {Alert.alert(error)});
    },[]);

    const [data, setData] = useState<userInput>()

    if (data){
        return (
            <PageContainer>
                <H1>{data.name}</H1>
                <H2>Email</H2>
                <InputLabel>{data.email}</InputLabel>
                <H2>CPF</H2>
                <InputLabel>{data.cpf}</InputLabel>
                <H2>Data de Nascimento</H2>
                <InputLabel>{data.birthDate}</InputLabel>
                <H2>Role</H2>
                <InputLabel>{data.role}</InputLabel>
            </PageContainer>
        )
    }
    else{
        return(
            <PageContainer>
                <H1>Carregando dados</H1>
                <LoadingIcon></LoadingIcon>
            </PageContainer>
        )
    }
};

export default UserDetailsPage
