import React from 'react'
import { BottomView, Card, Container, Date, Number, Title, UserName, UserView } from './styles'
import { styles } from '../../../../global/styles'

type CreditCardProps = {
  type: string
}

export const CreditCard = ({type}:CreditCardProps) => {
  return (
    
    <Container style={styles.dropShadow} background={type}>

      <Title background={type}>go</Title>

      <Number background={type}>6212  2115  5234  0914</Number>

      <BottomView>

         <UserView>
            <UserName background={type}>Samantha kudrow</UserName>
            <Date background={type}>02/27</Date>
         </UserView>

         <Card source={require('../../../../assets/master.png')}/>
      </BottomView>

    </Container>
  )
}