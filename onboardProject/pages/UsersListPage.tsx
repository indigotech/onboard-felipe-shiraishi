import React, { useEffect, SetStateAction } from 'react';
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

const PageContainerContent = (element:Element) =>{
    return (
        <PageContainer>
            <H1>Usuários</H1>
            {element}
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
<<<<<<< HEAD
                PageContainerContent(
                    <List data={data} loadMoreData={() => updateContent(offset, data, onDataChange, onOffsetChange)}></List>)
                )
        }
    }
<<<<<<< HEAD
    
    else{ return PageContainerContent(<LoadingIcon/>) }
};
=======
}
>>>>>>> Adds Page Routing

=======
                <PageContainer>
                    <H1>Usuários</H1>
                    <H1>Ops! Não há usuários!</H1>
                </PageContainer>
            )
            }
        }   
};
>>>>>>> Starts pagination feature

UsersListPage.navigationOptions = {
    title: 'UsersListPage',
  };
export default UsersListPage

