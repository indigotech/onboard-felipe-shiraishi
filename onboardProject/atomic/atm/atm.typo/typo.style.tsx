import styled from 'styled-components'
import { StyleGuide } from '../../../StyleGuide';

export const H1 = styled.Text`
    height: 45px;
    width: 100%;
    margin-bottom: 9px;
    margin-bottom: 9px;
    border-color: #FFF;
    font-weight: bold;
    font-size: 30px;
`;

export const H2 = styled.Text`
    height: auto;
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    color: #000;
    padding-left: 9px;
    padding-top: 9px;
`;

export const Subline = styled.Text`
    height: auto;
    width: 100%;
    font-size: 14px;
    color: ${StyleGuide.SecondaryColorEmphasis};
    padding-left: 9px;
    padding-bottom: 9px;
`;

export const InputLabel = styled.Text`
    font-size: 14px;
`;