import React from 'react';
import PrimaryButton from '../atomic/atm/atm.button/button.component';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import { View } from 'react-native';
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';

export interface UsersListPageProps {
    user: string;
}

export const UsersListPage = (props:UsersListPageProps) => 
{
    return (
        <PageContainer>

        </PageContainer>
    )
};

UsersListPage.navigationOptions = {
    title: 'UsersListPage',
  };
export default UsersListPage
