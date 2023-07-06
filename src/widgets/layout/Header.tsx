import React from 'react';
import styled from 'styled-components';
import avatar from '../../../public/icons/avatar.svg';
import select from '../../../public/icons/select.svg';

const Container = styled.div`
  display: flex;
  width: 1240px;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

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

const Right = styled.div`
  display: flex;
  width: 279px;
  align-items: center;
  gap: 15px;
`

const Text = styled.div`
  font-family: var(--font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: var(--black);
`

const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <Logo href='/'>Сетевой учебный класс</Logo>
      </Left>
      <Right>
        <img src={avatar} alt="avatar" />
        <Text>Морозов Антон Дмитриевич</Text>
        <button><img src={select} alt="меню" /></button>
      </Right>
    </Container>
  )
}

export default Header;
