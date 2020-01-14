import React from 'react'
import { StyledButton, StyledButtonContainer, StyledText } from './button.style'
import LoadingIcon from '../atm.loadingIcon/loadingIcon.component'

export interface PrimaryButtonProps 
{
    onClick: (event:any) => void;
    label: string;
    loading?: boolean;
}

export const PrimaryButton = (props:PrimaryButtonProps) => 
{
    return (
        <StyledButtonContainer>
            <StyledButton
                onPress={(event:any) => props.onClick(event)}>
                {props.loading && <LoadingIcon />}
                <StyledText>{props.label}</StyledText>
            </StyledButton>
        </StyledButtonContainer>
    )
}; export default PrimaryButton