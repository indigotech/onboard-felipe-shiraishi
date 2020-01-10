import React from 'react'
import { StyledList, StyledListEntry } from './list.style';
import { H2, Subline } from '../atm.typo/typo.style';
import { Alert } from 'react-native';

export interface ListProps {
    data: ListEntryKeyProps[];
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
    return (
        <StyledList
            data={props.data}
            renderItem={({item}:ListEntryProps) => 
            <ListEntry email = {item.email} name = {item.name}/>}
            keyExtractor = {(item:ListEntryKeyProps,index:number) => index.toString()}
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