import { StatusBar } from 'react-native'
import React from 'react'
import { Container, HeaderText, HeaderView } from './styles'
import { Avatar } from 'react-native-paper'
import { Main } from './Main'

export const Home = () => {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} backgroundColor="#873F8C" />

      <HeaderView>
        <Avatar.Image  size={50} source={require("../../assets/avatar.png")} />
        <HeaderText>Olá, Vinícius</HeaderText>
      </HeaderView>
      
      <Main />
    </Container>
  )
}