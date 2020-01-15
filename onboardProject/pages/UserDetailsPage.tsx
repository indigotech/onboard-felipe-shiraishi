import React, { useEffect, SetStateAction, useState } from 'react';
import {H1, H2} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { ColorPropType, Alert, RefreshControlBase } from 'react-native';
import { TextField, PickerField } from '../atomic/atm/atm.input/input.component'
import PrimaryButton from '../atomic/atm/atm.button/button.component'
import { validateBirthDate, validateEmail, validatePassword, validateCPF } from '../utils/validationUtils';
import { formatsBirthDate } from '../utils/validationUtils'
import { requestUserCreation } from '../utils/userCreationUtils'
import { userInput } from './CreateUserPage';

export const UserDetailsPage = (id:number) => 
{
    return (
        <PageContainer>
            <H1>{data.name}</H1>
            <H2>{data.email}</H2>
            <H2>{data.cpf}</H2>
            <H2>{data.birthDate}</H2>
            <H2>{data.role}</H2>
        </PageContainer>
    )
};

export default UserDetailsPage

