import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled.js';
import {ModalHeader, ModalBody, ModalFooter} from '../Modal.Styled.js';
import Button from '../../Button/Button.jsx';
import { GameContext } from '../../../contexts/GameContext.js'
import { ModalContext } from '../../../contexts/ModalContext.js'
import { SfxContext } from '../../../contexts/SfxContext.js';
import { useNavigate } from "react-router-dom";


function RoundOverModal() {
  const { resetBoard, game, restartGame} = useContext(GameContext);
  const { hoverSfx, clickSfx, completedSfx } = useContext(SfxContext)
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();
  return (
    <>
    <ModalHeader>
    <Title>{game.roundWinner ? `${game.roundWinner.name} Wins` : "Round Draw" }</Title>
    </ModalHeader>
    <ModalBody>
    <Subtitle> You win !</Subtitle>
    <Subtitle>{game.player1.name}: {game.player1.score}</Subtitle>
    <Subtitle>{game.player2.name}: {game.player2.score}</Subtitle>
    </ModalBody>
    <ModalFooter>
    <Button color='#f9c811' onClick={() => {
      clickSfx();
      handleModal();
      resetBoard();
      
    }} onMouseEnter={() => hoverSfx()}>Continue</Button>
    <Button color='#8437f9' onClick={() => {
    completedSfx();
    restartGame();
    handleModal();
    navigate("/");
    }} 
    onMouseEnter={() => 
      hoverSfx()}>
        Restart
        </Button>
    </ModalFooter>
    </>
  )
}

export default RoundOverModal