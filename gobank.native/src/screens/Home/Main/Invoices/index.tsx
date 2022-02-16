import React from 'react'
import { Container, DetailsDate, DetailsText, DetailsType, DetailsView, Graf, Header, HeaderNumber, HeaderTitle, ItemIcon, ItemView } from './styles'
import Icon from "react-native-vector-icons/Feather"

export const Invoices = () => {
  return (
    <Container style={{elevation: 5}}>

      <Header>
         <HeaderTitle>Fatura Atual</HeaderTitle>
         <HeaderNumber>R$ 570,50</HeaderNumber>
      </Header>

      <Graf />

      <ItemView>
         <ItemIcon><Icon name="smile" color="#fff" size={20} /></ItemIcon>
         <DetailsView>
            <DetailsType>Lazer</DetailsType>
            <DetailsText>Ebanx *Spotify</DetailsText>
            <DetailsText>R$ 8,50</DetailsText>
         </DetailsView>
         <DetailsDate>15 MAR</DetailsDate>
      </ItemView>

    </Container>
  )
}