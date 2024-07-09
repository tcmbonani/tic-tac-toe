import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled.js';
import {ModalHeader, ModalBody, ModalFooter} from '../Modal.Styled.js';
import Button from '../../Button/Button.jsx';
import { GameContext } from '../../../contexts/GameContext.js'
import { ModalContext } from '../../../contexts/ModalContext.js'

function RoundOverModal() {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
    <ModalHeader>
    <Title>Round Complete</Title>
    </ModalHeader>
    <ModalBody>
    <Subtitle> You win !</Subtitle>
    <Subtitle>Tshepiso X: 1</Subtitle>
    <Subtitle>Ayanda O: 0</Subtitle>
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