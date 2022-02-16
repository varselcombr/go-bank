import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: flex-start;
   align-items: center;
   background-color: ${({theme}) => theme.colors.primary30};
`;

export const HeaderView = styled.View`
   width: 100%;
   padding: 34px 24px;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
`

export const HeaderText = styled.Text`
   margin: 0 10px;
   color: ${({theme}) => theme.colors.neutal10};
   font-size: 20px;
   font-family: ${({theme}) => theme.fonts.semibold};
`