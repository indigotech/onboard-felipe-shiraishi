import styled from 'styled-components'
import { StyleGuide } from '../../../StyleGuide';

export const StyledButtonContainer = styled.View`
    height: auto;
    width: 60%;
    margin: 2px;
    align-self: center;
`;

export const StyledButton = styled.TouchableOpacity`
    width: 100%;
    color: #FFF;
    background-color: ${StyleGuide.PrimaryColor};
    border-radius: 6px;
    height: 50px;
    padding: 6px;
    justify-content:center;
    flex-direction: row;
`;

export const StyledText = styled.Text`
    width: 100%;
    height: 100%;
    color: #FFF;
    font-size: 18px;
    text-align: center;
    flex: 1;
`;

