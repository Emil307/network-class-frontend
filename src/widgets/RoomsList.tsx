import React from 'react';
import type { IRoom } from '../shared/api/models';
import styled from 'styled-components';
import RoomCard from '../entities/room/ui/RoomCard';

const Container = styled.div`
    width: calc(1196px - 5px);
    padding-right: 5px;
    margin: 0 auto;
    max-height: 642px;
    min-height: 542px;

    overflow: hidden;
    &:hover {
        padding-right: 0;
        overflow: scroll;
        overflow-x: hidden;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        opacity: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(126, 138, 152, .3);
    }
`

const Header = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 27px;
`

const Head = styled.h3`
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    color: var(--grey_2);
`

interface Props {
    rooms: IRoom[]
}

const RoomsList: React.FC<Props> = ({ rooms }) => {

  return (
    <Container>
        <Header>
            <Head>Название</Head>
            <Head>Владелец</Head>
            <Head>Статус</Head>
            <Head>Доступ</Head>
        </Header>
        {rooms.map(room => 
            <RoomCard room={room} key={room.id}/>    
        )}
    </Container>
  )
}

export default RoomsList