import React from 'react'
import { StyledPageContainer } from './pagecontainer.style';

export interface PageContainerProps 
{
    children?: JSX.Element[] | JSX.Element;
}

export const PageContainer = (props:PageContainerProps) => 
{
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}; export default PageContainer