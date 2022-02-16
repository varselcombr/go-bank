import styled from 'styled-components/native';

export const Container = styled.View`
   margin: 15px 20px;
   background-color: #fff;
   border-radius: 15px;
   padding: 20px;
   box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.View`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

export const HeaderTitle = styled.Text`
   font-family: ${({theme}) => theme.fonts.semibold};
   color: ${({theme}) => theme.colors.neutal50};
   font-size: 14px;
`

export const HeaderNumber = styled.Text`
   font-family: ${({theme}) => theme.fonts.bold};
   color: ${({theme}) => theme.colors.neutal50};
   font-size: 14px;
`

export const Graf = styled.View`
   margin: 20px auto;
   width: 90%;
   height: 6px;
   background-color: ${({theme}) => theme.colors.accent2};
   border-radius: 3px;
`

export const ItemView = styled.View`
   margin: 10px 0;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

export const ItemIcon = styled.View`
   width: 50px;
   height: 50px;
   background-color: ${({theme}) => theme.colors.accent1};
   border-radius: 25px;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const DetailsView = styled.View`
   display: flex;
   margin-left: 10px;
   margin-right: auto;
`

export const DetailsType = styled.Text`
   font-family: ${({theme}) => theme.fonts.semibold};
   font-size: 12px;
   color: ${({theme}) => theme.colors.neutal60};
`
export const DetailsText = styled.Text`
   font-family: ${({theme}) => theme.fonts.regular};
   font-size: 14px;
   color: ${({theme}) => theme.colors.neutal60};
`

export const DetailsDate = styled.Text`
   font-family: ${({theme}) => theme.fonts.regular};
   font-size: 12px;
   color: ${({theme}) => theme.colors.neutal50};
`