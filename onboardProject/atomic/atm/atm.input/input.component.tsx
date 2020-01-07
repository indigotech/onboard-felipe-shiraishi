import React from 'react'
import { TextInput } from 'react-native'
import { StyledTextInput } from './input.style';

export interface ITextInput 
{
    placeholder?: string;
    secure?: boolean;
}

export const TextField = (props:ITextInput) => 
{
    return (
        <StyledTextInput
            secureTextEntry = {props.secure}
            placeholder = {props.placeholder}
        />
    )
}; export default TextField