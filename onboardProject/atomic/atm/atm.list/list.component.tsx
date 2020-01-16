import React, { useState } from 'react'
import { StyledList, StyledListEntry } from './list.style';
import { H2, Subline } from '../atm.typo/typo.style';
import { queryUsers } from '../../../utils/apollo';

export interface ListProps {
    data: ListEntryKeyProps[];
    loadMoreData?: () => void;
    onClickEntry: (id:number) => void;
}

export interface ListEntryKeyProps{
    name: string;
    email: string;
    id:number;
    onClick: (id:number) => void;
}

export interface ListEntryProps{
    key: ListEntryKeyProps;
}

export const List = (props:ListProps) => 
{
    const [offset, onOffsetChange] = useState(10);

    const renderListEntry = ({item}:ListEntryProps) => {
        return <ListEntry id={item.id} email = {item.email} name = {item.name} onClick={() => props.onClickEntry(item.id)}/>
    };

    return (
        <StyledList
            data={props.data}
            renderItem={renderListEntry}
            keyExtractor = {(item:ListEntryKeyProps,index:number) => item.email}
            onEndReached = {props.loadMoreData}
            onEndReachedThreshold = {0.5}
        />
    )
}; export default List

export const ListEntry = (props:ListEntryKeyProps) => 
{
    return (
        <StyledListEntry onPress={props.onClick}>
            <H2>{props.name}</H2>
            <Subline>{props.email}</Subline>
        </StyledListEntry>
    )
};
