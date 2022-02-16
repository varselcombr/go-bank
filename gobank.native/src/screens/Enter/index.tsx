import React from 'react'
import { Text } from 'react-native'
import { Container, Background, Title, BtnView, SignButton, LoginButton, SignText, LoginText } from './styles'
import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../Models'

const image = "../../assets/intro-bg.png"

export const Enter = () => {
  const navigation = useNavigation<propsStack>()

  return (
    <Background source={require(image)} resizeMode="cover">
    <Container>
      <Title>go</Title>
      <BtnView>
        <SignButton 
          style={({ pressed }) => [
            {backgroundColor: pressed ? '#ebebeb' : '#fff',},
          ]}
        >
          <SignText>Abrir conta</SignText>
        </SignButton>
        <LoginButton
          style={({ pressed }) => [
            {backgroundColor: pressed ? 'rgba(246, 246, 246, 0.2)' : "transparent",},
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <LoginText>Já tenho conta</LoginText>
        </LoginButton>
      </BtnView>
    </Container>
    </Background>
  )
}