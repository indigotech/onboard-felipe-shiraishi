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

enum roles{ admin="admin", user="user" }

const enumToArray = (enumObject:any) => {
    let all = [];
    for(let key in enumObject){
        all.push(enumObject[key]);
    }
    return all;

}

interface userInput {
    name: string,
    email: string,
    cpf: string,
    birthDate: string,
    password: string,
    role: roles
}

export const CreateUserPage = () => 
{
    const [Nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [CPF, setCPF] = useState("")
    const [BirthDate, setBirthDate] = useState("")
    const [Role, setRole] = useState("")
    const [loading, setLoading] = useState(false)

    const handleButtonTap = () => {
        try{
            const validEmail = validateEmail(Email)
            const validPassword = validatePassword(Senha)
            const validCPF = validateCPF(CPF)
            const validBirthDate = validateBirthDate(BirthDate)
    
            setLoading(true);
            if (validEmail && validPassword && validCPF && validBirthDate){
                Alert.alert(Nome + Email + Senha + CPF + BirthDate + Role)
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
            <TextField label="Nome" placeholder="Nome" onChange={(text:string) => setNome(text)}/>
            <TextField label="Email" placeholder="Email" onChange={(text:string) => setEmail(text)}/>
            <TextField label="Senha" placeholder="Senha" secure={true} onChange={(text:string) => setSenha(text)}/>
            <TextField label="CPF" placeholder="CPF" onChange={(text:string) => setCPF(text)}/>
            <TextField label="Data de nascimento" placeholder="YYYY/MM/DD" onChange={(text:string) => setBirthDate(text)}/>
            <PickerField InputProps={{label:"Role", placeholder:roles.user, onChange:
                (text:string) => {setRole(text)}
            }} 
            categories={enumToArray(roles)} selected={Role}/>
            <PrimaryButton loading={loading} onClick={handleButtonTap} label="Criar Usuário"/>
        </PageContainer>
    )
};

export default CreateUserPage

