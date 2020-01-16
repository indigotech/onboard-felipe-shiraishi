import styled from 'styled-components'
import { Color } from 'csstype';
import { StyleGuide } from '../../../StyleGuide';

interface FabStyleProps {
    color: string;
}

export const StyledFabContainer = styled.View`
    height: auto;
    width: auto;
    bottom: 0px;
    right: 0px;
    margin: ${StyleGuide.MarginXLarge};
    position: absolute;
`;

export const StyledFabButton = styled.TouchableOpacity`
    width: 70px;
    color: ${(props:FabStyleProps) => props.color};
    background-color: ${(props:FabStyleProps) => props.color};
    border-radius: 100px;
    height: 70px;
    justify-content: center;
    align-items: center;
`;

export const StyledFabText = styled.Text`
    color: #FFF;
    font-size: 36px;
    font-weight: 300;
`;

