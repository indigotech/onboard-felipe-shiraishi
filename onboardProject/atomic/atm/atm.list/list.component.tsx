import React, { useState } from 'react'
import { StyledList, StyledListEntry } from './list.style';
import { H2, Subline } from '../atm.typo/typo.style';
import { queryUsers } from '../../../utils/apollo';

export interface ListProps {
    data: ListEntryKeyProps[];
    loadMoreData?: () => void;
}

export interface ListEntryKeyProps{
    name: string;
    email: string;
}

export interface ListEntryProps{
    key: ListEntryKeyProps;
}

export const List = (props:ListProps) => 
{
    const [offset, onOffsetChange] = useState(10);

    const renderListEntry = ({item}:ListEntryProps) => {
        return <ListEntry email = {item.email} name = {item.name}/>
    };

    return (
        <StyledList
            data={props.data}
            renderItem={renderListEntry}
<<<<<<< HEAD
            keyExtractor = {(item:ListEntryKeyProps,index:number) => item.email}
            onEndReached = {props.loadMoreData}
=======
            keyExtractor = {(item:ListEntryKeyProps,index:number) => index.toString()}
            onEndReached = {}
>>>>>>> Starts pagination feature
            onEndReachedThreshold = {0.5}
        />
    )
}; export default List

export const ListEntry = (props:ListEntryKeyProps) => 
{
    return (
        <StyledListEntry>
            <H2>{props.name}</H2>
            <Subline>{props.email}</Subline>
        </StyledListEntry>
    )
};
