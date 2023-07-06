import React from 'react';
import Header from '../widgets/layout/Header';
import RoomCard from '../entities/room/ui/RoomCard';

const Lobby: React.FC = () => {
  return (
    <div>
        <Header/>
        <RoomCard/>
    </div>
  )
}

export default Lobby