import React, { useEffect, SetStateAction } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import List, { ListProps } from '../atomic/atm/atm.list/list.component';
import { queryUsers } from '../utils/apollo';
import LoadingIcon from '../atomic/atm/atm.loadingIcon/loadingIcon.component';
import FabButton from '../atomic/atm/atm.fab/fab.component';
import { ColorPropType, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleGuide } from '../StyleGuide';
import { goToAddUser, goToUserDetail } from '../utils/navigation';

export interface RequestHeaders{
    Authorization: string
}

export interface UsersListContext{
    headers: RequestHeaders
}

const PageContainerContent = (element:JSX.Element) =>{
    return (
        <PageContainer>
            <H1>Usuários</H1>
            {element}
            <FabButton color={StyleGuide.PrimaryColor} onClick={goToAddUser}></FabButton>
        </PageContainer>
    )
}

const updateContent = (
        offset: number, 
        data: ListProps, 
        dataHook: (value:ListProps) => void, 
        offsetHook: (value:number) => void
        ) => {
            queryUsers(offset).then(result => {
                let _data = data.slice(0);
                _data = _data.concat(result);
                dataHook(_data);
                offsetHook(offset + 10);
    })
}

export const UsersListPage = () => 
{
    const [data, onDataChange] = React.useState<ListProps>();
    const [offset, onOffsetChange] = React.useState(10);
    const [error, onErrorLoad] = React.useState<Error>();

    const handleListEntryClick = (id: number) => {
        goToUserDetail(id)
    }

    useEffect(() => {
        queryUsers(0).then(result => onDataChange(result)).catch(error => onErrorLoad(error));
    },[]);

    if (error){
        return PageContainerContent(<H1> Não foi possível carregar o conteúdo! </H1>)
    }

    else if (Array.isArray(data)){
        if (data.length === 0){
            return PageContainerContent(<H1>Ops! Não há usuários!</H1>)
        }
        else{
            return (
                PageContainerContent(
                    <List data={data} onClickEntry={handleListEntryClick} loadMoreData={() => updateContent(offset, data, onDataChange, onOffsetChange)}></List>)
                )
        }
    }
    
    else{ return PageContainerContent(<LoadingIcon/>) }
};

UsersListPage.navigationOptions = {
    title: 'UsersListPage',
  };
export default UsersListPage

