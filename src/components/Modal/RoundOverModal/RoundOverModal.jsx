import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled.js';
import {ModalHeader, ModalBody, ModalFooter} from '../Modal.Styled.js';
import Button from '../../Button/Button.jsx';
import { GameContext } from '../../../contexts/GameContext.js'
import { ModalContext } from '../../../contexts/ModalContext.js'

function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
    <ModalHeader>
    <Title>{game.player1.choice === game.turn ? game.player1.name : game.player2.name}Round Complete</Title>
    </ModalHeader>
    <ModalBody>
    <Subtitle> You win !</Subtitle>
    <Subtitle>{game.player1.name}: {game.player1.score}</Subtitle>
    <Subtitle>{game.player2.name}: {game.player2.score}</Subtitle>
    </ModalBody>
    <ModalFooter>
    <Button color='#f9c811' onClick={() => {
      handleModal();
      resetBoard()
    }}>Continue</Button>
    <Button color='#8437f9' >Restart</Button>
    </ModalFooter>
    </>
  )
}

export default RoundOverModal