import React from 'react'
import { StyledFabContainer, StyledFabButton, StyledFabText } from './fab.style'

export interface FabProps 
{
    onClick: () => void;
    color: string;
}

export const FabButton = (props:FabProps) => 
{
    return (
        <StyledFabContainer>
            <StyledFabButton color={props.color} onPress={props.onClick}>
                <StyledFabText>+</StyledFabText>
            </StyledFabButton>
        </StyledFabContainer>
    )
}; export default FabButton