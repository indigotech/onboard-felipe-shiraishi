import React from 'react'
import { StyledButton, StyledButtonContainer, StyledText } from './button.style'
import { Text } from 'react-native'

export interface PrimaryButtonProps 
{
    onClick: (event:any) => void;
    label: string;
}

export const PrimaryButton = (props:PrimaryButtonProps) => 
{
    return (
        <StyledButtonContainer>
            <StyledButton
                onPress={(event:any) => props.onClick(event)}
            ><StyledText>{props.label}</StyledText></StyledButton>
        </StyledButtonContainer>
    )
}; export default PrimaryButton