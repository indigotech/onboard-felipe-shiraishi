import React from 'react'
import { StyledFabContainer, StyledFabButton, StyledFabText } from './fab.style'
import LoadingIcon from '../atm.loadingIcon/loadingIcon.component'
import { Color } from 'csstype';

export interface FabProps 
{
    onClick?: (event:any) => void;
    color: string;
}

export const FabButton = (props:FabProps) => 
{
    return (
        <StyledFabContainer>
            <StyledFabButton color= {props.color}>
                <StyledFabText>+</StyledFabText>
            </StyledFabButton>
        </StyledFabContainer>
    )
}; export default FabButton