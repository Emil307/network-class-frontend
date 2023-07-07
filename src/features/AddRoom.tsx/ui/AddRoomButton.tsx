import React from 'react';
import styled from 'styled-components';
import addIcon from '../../../../public/icons/create-class.svg';

const Button = styled.button`
    display: flex;
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--white);
    box-shadow: 0px 0px 8px 0px #E5EAF8;
`

export const AddRoomButton: React.FC = () => {
  return (
    <Button><img src={addIcon} alt="создать" /></Button>
  )
}
