import React, { useEffect, SetStateAction, useState } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import List, { ListProps } from '../atomic/atm/atm.list/list.component';
import { queryUsers } from '../utils/apollo';
import LoadingIcon from '../atomic/atm/atm.loadingIcon/loadingIcon.component';
import FabButton from '../atomic/atm/atm.fab/fab.component';
import { ColorPropType, Alert, RefreshControlBase } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleGuide } from '../StyleGuide';
import { TextField, PickerField } from '../atomic/atm/atm.input/input.component'
import PrimaryButton from '../atomic/atm/atm.button/button.component'
import { placeholder } from '@babel/types';
import { validateBirthDate, validateEmail, validatePassword, validateCPF } from '../utils/validationUtils';
import { formatsBirthDate } from '../utils/validationUtils'
import { requestUserCreation } from '../utils/userCreationUtils'
import { returnToList } from '../utils/navigation';

enum roles{ admin="admin", user="user" }

export interface userInput {
    name: string,
    email: string,
    cpf: string,
    birthDate: string,
    password: string,
    role: string
}

export const CreateUserPage = () => 
{
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [CPF, setCPF] = useState("")
    const [BirthDate, setBirthDate] = useState("")
    const [Role, setRole] = useState("")
    const [loading, setLoading] = useState(false)

    const handleButtonTap = async () => {
        try{
            const validEmail = validateEmail(Email.toLowerCase())
            const validPassword = validatePassword(Password)
            const validCPF = validateCPF(CPF)
            const validBirthDate = validateBirthDate(BirthDate)
    
            setLoading(true);
            if (validEmail && validPassword && validCPF && validBirthDate){
                const result = await requestUserCreation({
                    name: Name,
                    email: Email,
                    password: Password,
                    birthDate: BirthDate,
                    cpf: CPF,
                    role: Role
                })
                returnToList();
                setLoading(false)
            }
        } catch (error)
        {
            Alert.alert(error)
            setLoading(false)
        }
    }

    return (
        <PageContainer>
            <H1>Criar Usuário</H1>
            <TextField label="Nome" placeholder="Nome" onChange={(text:string) => setName(text)}/>
            <TextField label="Email" placeholder="Email" onChange={(text:string) => setEmail(text)}/>
            <TextField label="Senha" placeholder="Senha" secure={true} onChange={(text:string) => setPassword(text)}/>
            <TextField label="CPF" placeholder="CPF" onChange={(text:string) => setCPF(text)}/>
            <TextField label="Data de nascimento" placeholder="YYYY/MM/DD" onChange={(text:string) => setBirthDate(formatsBirthDate(text))}/>
            <PickerField inputProps={{label:"Role", placeholder:roles.user, onChange:
                (text:string) => {setRole(text)}
            }} 
            categories={Object.values(roles)} selected={Role}/>
            <PrimaryButton loading={loading} onClick={handleButtonTap} label="Criar Usuário"/>
        </PageContainer>
    )
};

export default CreateUserPage

