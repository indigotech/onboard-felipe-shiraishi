import React, { useState } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { TextField, PickerField } from '../atomic/atm/atm.input/input.component'
import PrimaryButton from '../atomic/atm/atm.button/button.component'
import { validateBirthDate, validateEmail, validatePassword, validateCPF, validateName } from '../utils/validationUtils';
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
    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [creationError, setCreationError] = React.useState("");
    const [CPFError, setCPFError] = React.useState("");
    const [birthError, setBirthError] = React.useState("");

    const Fields = {
        Email: "Email", 
        Password: "Password", 
        CPF: "CPF", 
        Birth: "BirthDate", 
        Name: "Name"
    }

    const formsState = {
        Email: Email,
        Password: Password,
        CPF: CPF,
        Name: Name,
        BirthDate: BirthDate
    }
    const validators = {
        Email: validateEmail,
        Password: validatePassword,
        CPF: validateCPF,
        Name: validateName,
        BirthDate: validateBirthDate
    }
    const errorSetters = {
        Email: setEmailError,
        Password: setPasswordError,
        CPF: setCPFError,
        Name: setNameError,
        BirthDate: setBirthError
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

            if (emailError !== "" || 
            passwordError !== "" || 
            CPFError !== "" || 
            birthError !== "" || 
            nameError !== "" ) {
                throw Error
            }

            setCreationError("")
            setLoading(true);
        
            await requestUserCreation({
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
            setCreationError("Não foi possível criar um usuário")
            setLoading(false)
        }
    }

    return (
        <PageContainer>
            <ScrollView>
                <H1>Criar Usuário</H1>
                <TextField errorMessage={nameError} label="Nome" placeholder="Nome" onChange={(text:string) => setName(text)}/>
                <TextField errorMessage={emailError} label="Email" placeholder="Email" onChange={(text:string) => setEmail(text)}/>
                <TextField errorMessage={passwordError} label="Senha" placeholder="Senha" secure={true} onChange={(text:string) => setPassword(text)}/>
                <TextField errorMessage={CPFError} label="CPF" placeholder="CPF" onChange={(text:string) => setCPF(text)}/>
                <TextField errorMessage={birthError} label="Data de nascimento" placeholder="YYYY/MM/DD" onChange={(text:string) => setBirthDate(formatsBirthDate(text))}/>
                <PickerField inputProps={{ errorMessage:"", label:"Role", placeholder:roles.user, onChange:
                    (text:string) => {setRole(text)}
                }} 
                categories={Object.values(roles)} selected={Role}/>
                <PrimaryButton 
                    colorError={StyleGuide.errorColor}
                    errorMessage={creationError}
                    loading={loading} onClick={handleButtonTap} label="Criar Usuário"/>
            </ScrollView>
        </PageContainer>
    )
};

export default CreateUserPage

