import React from 'react'
import { StyledButton } from './button.style'
import { Button, View} from 'react-native'

export interface IPrimaryButton 
{
    onClick?: (event:any) => void;
    text: string;
}

const PrimaryButton = (props:IPrimaryButton) => 
{
    return (
        <StyledButton>
            <Button
                title={props.text}
                onPress={() => props.onClick}
            />
        </StyledButton>
    )
}; export default PrimaryButton