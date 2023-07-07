import React, { useState } from 'react';
import styled from 'styled-components';
import { AddRoomButton } from '../../features/AddRoom.tsx';
import { SearchInput } from '../../features/Search/index.ts';

const Container = styled.div`
    display: flex;
    width: 1224px;
    justify-content: space-between;
    margin: 66px auto 25px;
    border-bottom: 0.5px var(--grey_4) solid;
`

const Left = styled.div`
    display: flex;
    width: 434px;
    justify-content: space-between;
`

const Link = styled.button`
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    padding: 12px 0 21px;

    color: var(--grey_3);
`

const Right = styled.div`
    display: flex;
    width: 360px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 13px;
`

interface Props {
    children?: React.ReactNode,
}

const Navbar: React.FC<Props> = ({ children }) => {
    const [activeLink, setActiveLink] = useState('all');

    function activateAll() {
        setActiveLink('all');
    }

    function activateAccess() {
        setActiveLink('access');
    }

    function activateMy() {
        setActiveLink('my');
    }

  return (
    <Container>
        <Left>
            <Link onClick={activateAll} style={activeLink === 'all' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Все классы(121)</Link>
            <Link onClick={activateAccess} style={activeLink === 'access' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Доступные(5)</Link>
            <Link onClick={activateMy} style={activeLink === 'my' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Мои(2)</Link>
        </Left>
        <Right>
            <AddRoomButton />
            <SearchInput/>
        </Right>
    </Container>
  )
}

export default Navbar