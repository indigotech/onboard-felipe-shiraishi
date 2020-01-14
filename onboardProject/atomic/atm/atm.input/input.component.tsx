import React from 'react'
import { StyledTextInput, StyledInputContainer } from './input.style';
import { H2, InputLabel } from '../atm.typo/typo.style'


export interface TextInputProps 
{
    placeholder?: string;
    secure?: boolean;
    onChangeText: (input:string) => void;
}

export const TextField = (props:TextInputProps) => 
{
    return (
        <StyledInputContainer>
            <InputLabel>{props.placeholder}</InputLabel>
            <StyledTextInput
                secureTextEntry = {props.secure}
                placeholder = {props.placeholder}
                onChangeText = { props.onChangeText }
            />
        </StyledInputContainer>
    )
}; export default TextField