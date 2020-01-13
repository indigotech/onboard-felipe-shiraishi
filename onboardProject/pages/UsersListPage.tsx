import React, { useEffect } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import List, { ListProps } from '../atomic/atm/atm.list/list.component';
import { queryUsers } from '../utils/apollo';
import LoadingIcon from '../atomic/atm/atm.loadingIcon/loadingIcon.component';

export interface RequestHeaders{
    Authorization: string
}

export interface UsersListContext{
    headers: RequestHeaders
}

export const UsersListPage = () => 
{
    const [data, onDataChange] = React.useState<ListProps>();
    const [offset, onOffsetChange] = React.useState(10);
    const [error, onErrorLoad] = React.useState<Error>();

    useEffect(() => {
        queryUsers(0).then(result => onDataChange(result)).catch(error => onErrorLoad(error));
    },[]);

    if (error){
        return (
            <PageContainer>
                <H1>Usuários</H1>
                <H1> Não foi possível carregar o conteúdo! </H1>
            </PageContainer>
        )
    }

    else if (Array.isArray(data)){
        if (data.length === 0){
            return (
                <PageContainer>
                    <H1>Usuários</H1>
                    <H1>Ops! Não há usuários!</H1>
                </PageContainer>
            )
            }
            return (
                <PageContainer>
                    <H1>Usuários</H1>
                    <List data={data} loadMoreData={() => {
                        queryUsers(offset).then(result => {
                            let _data = data.slice(0);
                            _data = _data.concat(result)
                            onDataChange(_data);
                            onOffsetChange(offset + 10);
                        }
                        )}}></List>
                </PageContainer>
            )
    }
    
    else{
        return (
            <PageContainer>
                <H1>Usuários</H1>
                <LoadingIcon/>
            </PageContainer>
        )
    }
};

UsersListPage.navigationOptions = {
    title: 'UsersListPage',
  };
export default UsersListPage
