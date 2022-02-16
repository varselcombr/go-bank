import React from 'react'
import { CardNavCircle, CardNavContainer, CardNavPressable, CardNavText, Container, LineInfo, LineResult, LineView, NavBox, NavText, NavView } from './styles'
import { CardsCarousel } from './Carousel'
import { Invoices } from './Invoices'
import { Image } from 'react-native'

const limitIcon = "../../../assets/icons/limitIcon.png"
const cardIcon = "../../../assets/icons/cardIcon.png"
const bloqIcon = "../../../assets/icons/bloqIcon.png"
const contactIcon = "../../../assets/icons/contactIcon.png"

export const Main = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <NavView>
         <NavBox style={{elevation: 5}}>
            <NavText active={true}>Cartão de crédito</NavText>
         </NavBox>
         
         <NavBox style={{elevation: 5}}>
            <NavText>Conta</NavText>
         </NavBox>
      </NavView>

      <CardsCarousel />

      <Invoices />

      {/* a component to display unique info */}
      <LineView style={{elevation: 5}}>
        <LineInfo>Melhor dia para compra</LineInfo>
        <LineResult>21</LineResult>
      </LineView>
      
      <LineView style={{elevation: 5}}>
        <LineInfo>Limite disponível</LineInfo>
        <LineResult>R$972,62</LineResult>
      </LineView>

      <CardNavContainer style={{elevation: 5}}>

        <CardNavPressable>
          <CardNavCircle><Image source={require(limitIcon)} /></CardNavCircle>
          <CardNavText>Ajustar limite</CardNavText>
        </CardNavPressable>

        <CardNavPressable>
          <CardNavCircle><Image source={require(cardIcon)} /></CardNavCircle>
          <CardNavText>Cartão virtual</CardNavText>
        </CardNavPressable>

        <CardNavPressable>
          <CardNavCircle><Image style={{marginLeft: 5, marginBottom: 6}} source={require(bloqIcon)} /></CardNavCircle>
          <CardNavText>Bloquear cartão</CardNavText>
        </CardNavPressable>

        <CardNavPressable>
          <CardNavCircle><Image source={require(contactIcon)} /></CardNavCircle>
          <CardNavText>Fale conosco</CardNavText>
        </CardNavPressable>

      </CardNavContainer>

    </Container>
  )
}