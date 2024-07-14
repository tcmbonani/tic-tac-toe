import React from 'react'
import { PlayerWrapper , AvatarWrapper} from './Player.styled';
import Avatar, { genConfig } from 'react-nice-avatar';
import { Text } from "../../styles/General.styled" 

function Player({player, isPlayerActive}) {

  const config = genConfig() 

  return (
    <PlayerWrapper isPlayerActive={ isPlayerActive ?? false}>
      <AvatarWrapper>
      <Avatar {...config} />
      </AvatarWrapper>
    <Text>
      {player.name} ({player.choice})
    </Text>
    <Text size="2rem">{player.score}</Text>
    </PlayerWrapper>
  )
}

export default Player