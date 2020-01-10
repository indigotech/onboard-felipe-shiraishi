import React, { useEffect } from 'react';
import {H1} from '../atomic/atm/atm.typo/typo.style'
import PageContainer from '../atomic/atm/atm.pagecontainer/pagecontainer.component';
import { gql } from "@apollo/client"
import List, { ListProps } from '../atomic/atm/atm.list/list.component';
import { client, _fetchData } from '../utils/apollo';
import LoadingIcon from '../atomic/atm/atm.loadingIcon/loadingIcon.component';

export interface RequestHeaders{
    Authorization: string
}

export interface UsersListContext{
    headers: RequestHeaders
}

function mountContext (token:string){
    return({headers: 
        {
            Authorization: token
        }
    })
}

export const UsersListPage = () => 
{
    const [token, onTokenFetch] = React.useState("");
    const [data, onDataChange] = React.useState<ListProps>();
    const [context, onContextChange] = React.useState<UsersListContext>();
    let loading = false

    useEffect(() => {
        const query = gql`{Users{
                            nodes{
                                name
                                email
                            }
                        }
                    }`

        _fetchData("token"
        ).then(result => (typeof result === "string") ? onTokenFetch(result) : ""
        ).then(() => onContextChange(mountContext(token))
        ).then(() => client.query({ query: query, context: context }
        ).then((result) => onDataChange(result.data.Users.nodes))
        );
    });

    return (
        <PageContainer>
            <H1>Usuários</H1>
            { Array.isArray(data) ? <List data={data}></List> : <LoadingIcon/>}
        </PageContainer>
    )
};

UsersListPage.navigationOptions = {
    title: 'UsersListPage',
  };
export default UsersListPage
