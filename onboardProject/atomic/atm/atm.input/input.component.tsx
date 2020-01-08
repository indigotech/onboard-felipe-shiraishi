import React from 'react'
import { TextInput } from 'react-native'
import { StyledTextInput } from './input.style';

export interface TextInputProps 
{
    placeholder?: string;
    secure?: boolean;
    onChangeText: (input:string) => void;
}

export const TextField = (props:TextInputProps) => 
{
    return (
        <StyledTextInput
            secureTextEntry = {props.secure}
            placeholder = {props.placeholder}
            onChangeText = {(text:string) => props.onChangeText(text)}
        />
    )
}; export default TextField