import React, { useEffect, SetStateAction, useState } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import List, { ListProps } from '../atomic/atm/atm.list/list.component';
import { queryUsers } from '../utils/apollo';
import LoadingIcon from '../atomic/atm/atm.loadingIcon/loadingIcon.component';
import FabButton from '../atomic/atm/atm.fab/fab.component';
import { ColorPropType, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleGuide } from '../StyleGuide';
import { TextField } from '../atomic/atm/atm.input/input.component'
import PrimaryButton from '../atomic/atm/atm.button/button.component'


export const CreateUserPage = () => 
{
    const [Nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [CPF, setCPF] = useState("")

    return (
        <PageContainer>
            <H1>Criar Usuário</H1>
            <TextField placeholder="Nome" onChangeText={(text:string) => setNome(text)}/>
            <TextField placeholder="Email" onChangeText={(text:string) => setEmail(text)}/>
            <TextField placeholder="Senha" secure={true} onChangeText={(text:string) => setSenha(text)}/>
            <TextField placeholder="CPF" onChangeText={(text:string) => setCPF(text)}/>
            <PrimaryButton onClick={() => Alert.alert("Eu Funciono")} label="Criar Usuário"/>
        </PageContainer>
    )
};

export default CreateUserPage

