import React, { useEffect, SetStateAction, useState } from 'react';
import {H1, H2, InputLabel, Body} from '../atomic/atm/atm.typo/typo.style'
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
        queryUser(id).then(result => setData(result)).catch(error => {() => setError(error)});
    },[]);

    const [data, setData] = useState<userInput>()
    const [error, setError] = useState()
    
    if (error){
        return (
            <PageContainer>
                <H1>Não foi possível carregar o conteúdo</H1>
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            { (data) ? (
            <>
                <H1>{data.name}</H1>
                <H2>Email</H2>
                <Body>{data.email}</Body>
                <H2>CPF</H2>
                <Body>{data.cpf}</Body>
                <H2>Data de Nascimento</H2>
                <Body>{data.birthDate}</Body>
                <H2>Role</H2>
                <Body>{data.role}</Body>
            </>) : 
            (<LoadingIcon/>)}
            
        </PageContainer>
    )
};

export default UserDetailsPage

