import styled from 'styled-components'
import { StyleGuide } from '../../../StyleGuide';

export const H1 = styled.Text`
    height: 45px;
    width: 100%;
    margin-bottom: ${StyleGuide.MarginSmall};
    margin-bottom: ${StyleGuide.MarginSmall};
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
    padding-left: ${StyleGuide.MarginSmall};
    padding-top: ${StyleGuide.MarginSmall};
`;

export const Subline = styled.Text`
    height: auto;
    width: 100%;
    font-size: 14px;
    color: ${StyleGuide.SecondaryColorEmphasis};
    padding-left: ${StyleGuide.MarginSmall};
    padding-bottom: ${StyleGuide.MarginSmall};
`;

export const InputLabel = styled.Text`
    font-size: 14px;
`;

export const Body = styled.Text`
    font-size: 14px;
    padding-left: ${StyleGuide.MarginSmall};
`