import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer} from './styles';

export default function Header(){
  return(
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />

        </BasketContainer>
      </Container>

    </Wrapper>
  )
}
