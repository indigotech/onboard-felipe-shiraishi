import React, { useEffect, SetStateAction, useState } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { Alert } from 'react-native';
import { TextField, PickerField } from '../atomic/atm/atm.input/input.component'
import PrimaryButton from '../atomic/atm/atm.button/button.component'
import { validateBirthDate, validateEmail, validatePassword, validateCPF } from '../utils/validationUtils';
import { formatsBirthDate } from '../utils/validationUtils'
import { requestUserCreation } from '../utils/userCreationUtils'
import { returnToList } from '../utils/navigation';
import { StyleGuide } from '../StyleGuide';
import { ScrollView } from 'react-native-gesture-handler';

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

    // Forms error filling
    const [nameError, setNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [creationError, setCreationError] = React.useState(false);
    const [CPFError, setCPFError] = React.useState(false);
    const [birthError, setBirthError] = React.useState(false);

    const [nameErrorMessage, setNameErrorMessage] = React.useState("");
    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
    const [creationErrorMessage, setCreationErrorMessage] = React.useState("");
    const [CPFErrorMessage, setCPFErrorMessage] = React.useState("");
    const [birthErrorMessage, setBirthErrorMessage] = React.useState("");

    const handleButtonTap = async () => {
        try{
            try{
                validateEmail(Email)
                setEmailError(false);
            }
            catch (message){
                setEmailErrorMessage(message)
                setEmailError(true);
            }

            try{
                validatePassword(Password)
                setPasswordError(false);
                
            }
            catch (message){
                setPasswordErrorMessage(message)
                setPasswordError(true)
            }
            try{
                validateCPF(CPF)
                setCPFError(false);
            }
            catch (message){
                setCPFErrorMessage(message)
                setCPFError(true);
            }

            try{
                validateBirthDate(BirthDate)
                setBirthError(false);
            }
            catch (message){
                setBirthErrorMessage(message)
                setBirthError(true)
            }

            if (Name === ""){
                setNameError(true)
                setNameErrorMessage("Nome vazio")
            }
            else{
                setNameError(false)
            }

            if (emailError || passwordError || CPFError || birthError || nameError){
                throw Error
            }

            setCreationError(false)
            setLoading(true);
        
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
        } catch (error)
        {
            setCreationError(true)
            setCreationErrorMessage("Não foi possível criar um usuário")
            setLoading(false)
        }
    }

    return (
        <PageContainer>
            <ScrollView>
                <H1>Criar Usuário</H1>
                <TextField error={nameError} errorMessage={nameErrorMessage} label="Nome" placeholder="Nome" onChange={(text:string) => setName(text)}/>
                <TextField error={emailError} errorMessage={emailErrorMessage} label="Email" placeholder="Email" onChange={(text:string) => setEmail(text)}/>
                <TextField error={passwordError} errorMessage={passwordErrorMessage} label="Senha" placeholder="Senha" secure={true} onChange={(text:string) => setPassword(text)}/>
                <TextField error={CPFError} errorMessage={CPFErrorMessage} label="CPF" placeholder="CPF" onChange={(text:string) => setCPF(text)}/>
                <TextField error={birthError} errorMessage={birthErrorMessage} label="Data de nascimento" placeholder="YYYY/MM/DD" onChange={(text:string) => setBirthDate(formatsBirthDate(text))}/>
                <PickerField inputProps={{error:false, errorMessage:"", label:"Role", placeholder:roles.user, onChange:
                    (text:string) => {setRole(text)}
                }} 
                categories={Object.values(roles)} selected={Role}/>
                <PrimaryButton displayError={creationError} colorError={StyleGuide.errorColor}
                errorMessage={creationErrorMessage}
                loading={loading} onClick={handleButtonTap} label="Criar Usuário"/>
            </ScrollView>
        </PageContainer>
    )
};

export default CreateUserPage

