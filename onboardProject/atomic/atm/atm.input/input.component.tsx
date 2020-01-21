import React from 'react'
import { StyledTextInput, StyledInputContainer, StyledPickerInput } from './input.style';
import { InputLabel, Subline, Caption } from '../atm.typo/typo.style'
import { Picker } from 'react-native';
import { StyleGuide } from '../../../StyleGuide';


export interface InputProps 
{
    placeholder?: string;
    label: string;
    secure?: boolean;
    errorMessage: string;
    onChange: (input:string) => void;
}

export interface PickerProps{
    inputProps: InputProps;
    selected: string;
    categories: string[];
}

const InputLayoutComponent = (InputType:JSX.Element, label:string, errorMessage: string) => {
    return(
        <StyledInputContainer>
            <InputLabel>{label}</InputLabel>
            {InputType}
            <Caption color={StyleGuide.errorColor} display={(errorMessage !== "") ? true : false}>
                {errorMessage}</Caption>
        </StyledInputContainer>
    )
}

export const PickerField = (props:PickerProps) => {
    const categories = () => {
        return (props.categories.map((category) => {
            return (<Picker.Item label={category} value={category}/>)
        }))
    }

    return(
        InputLayoutComponent(
            <StyledPickerInput
                selectedValue={props.selected}
                onValueChange={props.inputProps.onChange}
                mode="dropdown">

                {categories()}
            </StyledPickerInput>
            , props.inputProps.label, ""
        )
    )
}

export const TextField = (props:InputProps) => 
{
    return (
        InputLayoutComponent(
            <StyledTextInput
                secureTextEntry = {props.secure}
                placeholder = {props.placeholder}
                error={(props.errorMessage !== "") ? true : false}
                onChangeText = { props.onChange }
            />, props.label, props.errorMessage)
 
    )
}; export default TextField