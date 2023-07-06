import React from 'react';
import styled from 'styled-components';
import avatar from '../../../public/icons/avatar.svg';

const Container = styled.div``

const Left = styled.div``

const Logo = styled.a`
  text-align: center;
  font-family: Kino;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: var(--blue);
`

const Right = styled.div``

const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <Logo>Сетевой учебный класс</Logo>
      </Left>
      <Right>
        <img src={avatar} alt="avatar" />
      </Right>
    </Container>
  )
}

export default Header;
