import React from 'react'
import { StyledButton, StyledButtonContainer, StyledText } from './button.style'
import { Text } from 'react-native'

export interface IPrimaryButton 
{
    onClick?: (event:any) => void;
    label: string;
}

export const PrimaryButton = (props:IPrimaryButton) => 
{
    return (
        <StyledButtonContainer>
            <StyledButton
                onPress={() => props.onClick}
            ><StyledText>{props.label}</StyledText></StyledButton>
        </StyledButtonContainer>
    )
}; export default PrimaryButton