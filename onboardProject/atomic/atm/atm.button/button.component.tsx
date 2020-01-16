import React from 'react'
import { StyledButton, StyledButtonContainer, StyledText } from './button.style'
import LoadingIcon from '../atm.loadingIcon/loadingIcon.component'
import { Caption } from '../atm.typo/typo.style';

export interface PrimaryButtonProps 
{
    onClick: (event:any) => void;
    label: string;
    loading?: boolean;
    displayError: boolean;
    colorError: string;
    errorMessage: string;
    
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
            <Caption display={props.displayError} color={props.colorError}>{props.errorMessage}</Caption>
        </StyledButtonContainer>
    )
}; export default PrimaryButton