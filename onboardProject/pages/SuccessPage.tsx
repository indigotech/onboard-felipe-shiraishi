import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { View } from 'react-native';

export interface ISuccessPage {
    user: string;
}

export const SuccessPage = (props:ISuccessPage) => 
{
    return (
        <View>
            <H1>Bem-vindo! {props.user}</H1>
            <PrimaryButton text={"Change user"}/>
        </View>
    )
}; export default SuccessPage
