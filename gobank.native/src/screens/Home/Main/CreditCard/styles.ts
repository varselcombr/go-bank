import styled from 'styled-components/native';

type BackgroundProps = {
   background: string
}

export const Container = styled.View<BackgroundProps>`
   margin: 20px 0;
   padding: 20px;
   background-color: ${({background}) => background === "light" ? "#FFD7CB" : "#5C3C75"} ;
   border-radius: 20px;
`;

export const Title = styled.Text<BackgroundProps>`
   margin: 0 0 10px;
   font-size: 32px;
   font-family: ${({theme}) => theme.fonts.bold};
   color: ${({theme, background}) => background === "light" ? "#CD7B61" : theme.colors.neutal10};
`

export const Number = styled.Text<BackgroundProps>`
   margin: 10px 0;
   color: ${({background}) => background === "light" ? "#CD7B61" : "#fff"} ;
   font-size: 24px;
   font-family: ${({theme}) => theme.fonts.semibold};
`

export const BottomView = styled.View`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

export const UserView = styled.View`
   margin: 10px 0;
   display: flex;
   flex-direction: column;
`

export const UserName = styled.Text<BackgroundProps>`
   color: ${({background}) => background === "light" ? "#CD7B61" : "#fff"} ;
   font-size: 14px;
   font-family: ${({theme}) => theme.fonts.semibold};
`
export const Date = styled.Text<BackgroundProps>`
   color: ${({background}) => background === "light" ? "#CD7B61" : "#fff"} ;
   font-size: 12px;
   font-family: ${({theme}) => theme.fonts.semibold};
`

export const Card = styled.Image`
   width: 40px;
   height: 24.5px;
`