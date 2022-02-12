import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
   flex: 1;
   justify-content: center;
`

export const Container = styled.View`
   flex: 1;
   padding: 10% 15% 20%;
   justify-content: space-between;
   align-items: center;
   background-color: rgba(110, 51, 114, .46);
   `

export const Title = styled.Text`
   color: #fff;
   font-size: 48px;
   align-self: flex-start;
`

export const BtnView = styled.View`
   width: 100%;
   display: flex;
`

export const SignButton = styled.Pressable`
   width: 100%;
   margin: 10px 0;
   display: flex;
   align-items: center;
   padding: 15px 0;
   border-radius: 30px;
`

export const SignText = styled.Text`
   color: #6E3372;
`

export const LoginButton = styled.Pressable`
   width: 100%;
   margin: 10px 0;
   display: flex;
   align-items: center;
   padding: 15px 0;
   border: 2px solid #fff;
   border-radius: 30px;
`

export const LoginText = styled.Text`
   color: #fff;
`