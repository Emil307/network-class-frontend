import React from 'react';
import styled from 'styled-components';
import join from '../../../../public/icons/join.svg';

const Svg = styled.svg``

const Button = styled.button`
    font-family: var(--font);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    color: var(--blue);

    display: flex;
    height: 44px;
    padding: 10px;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    border: 1px solid var(--blue);
    transition: all .3s;
    &:hover {
      background: var(--blue);
      color: #fff;
    }
    &:hover + ${Svg} {
      stroke: var(--white);
      fill: var(--white);
    }
`

interface Props {
    disabled: boolean,
}

const JoinButton = () => {
  return (
    <Button onClick={() => {location.href="/lesson"}}>
        <p>Подключиться</p>
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="bracket--code-angle-programming-file-bracket">
            <path id="Vector" d="M7.66666 21.0001L13.807 11.1204L7.66666 1.24072" stroke="#175EF1" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_2" d="M1 20.963L7.14035 11.0833L1 1.20361" stroke="#175EF1" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="Vector_2_2" d="M14.8596 20.7594L21 10.8797L14.8596 1" stroke="#175EF1" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </Svg>
    </Button>
  )
}

export default JoinButton;
