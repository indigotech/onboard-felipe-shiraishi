import React from 'react'
import { StyledTextInput, StyledInputContainer, StyledPickerInput } from './input.style';
import { InputLabel } from '../atm.typo/typo.style'
import { Picker } from 'react-native';


export interface InputProps 
{
    placeholder?: string;
    label: string;
    secure?: boolean;
    onChange: (input:string) => void;
}

export interface PickerProps{
    inputProps: InputProps;
    selected: string;
    categories: string[];
}

const InputLayoutComponent = (InputType:JSX.Element, label:string) => {
    return(
        <StyledInputContainer>
            <InputLabel>{label}</InputLabel>
            {InputType}
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
            , props.inputProps.label
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
                onChangeText = { props.onChange }
            />, props.label)
 
    )
}; export default TextField