import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   padding: 10px 0;
   flex: 1;
   width: 100%;
   background-color: ${({theme}) => theme.colors.neutal10};
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
`;

export const NavView = styled.View`
   margin: 10px 20px 0;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
`

export const NavBox = styled.Pressable`
   margin: 0 5px;
   padding: 5px 10px;
   background-color: #fff;
   border-radius: 20px;
   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`

type NavTextProps = {
   active?: boolean,
}

export const NavText = styled.Text<NavTextProps>`
   font-family: ${({theme}) => theme.fonts.semibold};
   font-size: 14px;
   color: ${({theme, active}) => active ?  theme.colors.primary30 : theme.colors.neutal40};
`

export const LineView = styled.View`
   margin: 15px 20px;
   padding: 15px 20px;
   background-color: #fff;
   border-radius: 20px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`

export const LineInfo = styled.Text`
   font-size: 12px;
   font-family: ${({theme}) => theme.fonts.semibold};
   color: ${({theme}) => theme.colors.neutal50};
`

export const LineResult = styled.Text`
   font-size: 12px;
   font-family: ${({theme}) => theme.fonts.bold};
   color: ${({theme}) => theme.colors.primary30};
`

export const CardNavContainer = styled.View`
   margin: 15px 20px;
   padding: 20px;
   border-radius: 15px;
   background-color: #fff;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
`

export const CardNavPressable = styled.View`
   width: 20%;
   display: flex;
   align-items: center;
`

export const CardNavCircle = styled.View`
   margin-bottom: 10px;
   width: 55px;
   height: 55px;
   background-color: ${({theme}) => theme.colors.neutal20};
   border-radius: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const CardNavText = styled.Text`
   font-family: ${({theme}) => theme.fonts.semibold};
   color: ${({theme}) => theme.colors.neutal60};
   font-size: 12px;
   text-align: center;
`