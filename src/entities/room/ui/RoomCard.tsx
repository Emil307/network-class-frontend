import React from 'react';
import type { IRoom } from '../../../shared/api/models';
import styled from 'styled-components';
import JoinButton from './JoinButton';
import avatar from '../../../../public/icons/avatar.svg';
import callActive from '../../../../public/icons/call-active.svg';
import copy from '../../../../public/icons/copy.svg';

const Container = styled.div`
    display: flex;
    width: calc(100% - 48px);
    padding: 24px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;

    border-radius: 10px;
    background: var(--white);
    box-shadow: 0px 0px 8px 0px #E5EAF8;
`

const Info = styled.div`
    display: flex;
    width: 263px;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h3`
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    color: var(--black);
`

const Teacher = styled.h4`
    font-family: var(--font);
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    color: var(--black);
`

const Access = styled.div`
    display: flex;
    width: 229px;
    justify-content: space-between;
    align-items: center;
`

interface Props {
    room: IRoom,
}

const RoomCard: React.FC<Props> = ({ room }) => {
  return (
    <Container>
        <Info>
            <img src={avatar} alt="avatar" />
            <Title>{room.title}</Title>
        </Info>
        <Teacher>{room.owner}</Teacher>
        <img src={callActive} alt='доступен'/>
        <Access>
            <JoinButton/>
            <button><img src={copy} alt="копировать" /></button>
        </Access>
    </Container>
  )
}

export default RoomCard;
