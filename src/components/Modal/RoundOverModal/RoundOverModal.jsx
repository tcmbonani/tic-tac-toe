import React from 'react'
import { Title, Subtitle } from '../../../styles/General.styled.js'
import {ModalHeader, ModalBody, ModalFooter} from '../Modal.Styled.js'
import Button from '../../Button/Button.jsx'

function RoundOverModal() {
  return (
    <>
    <ModalHeader>
    <Title>Round Complete</Title>
    </ModalHeader>
    <ModalBody>
    <Subtitle> You win !</Subtitle>
    <Subtitle>Tshepiso X: 1</Subtitle>
    <Subtitle>Player-2 O: 0</Subtitle>
    </ModalBody>
    <ModalFooter>
    <Button color='#f9c811'>Continue</Button>
    <Button color='#8437f9'>Restart</Button>
    </ModalFooter>
    </>
  )
}

export default RoundOverModal