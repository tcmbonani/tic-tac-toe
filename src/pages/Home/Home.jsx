import React, { useContext } from 'react';
import { Container, Title, Subtitle } from '../../styles/General.styled';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { SfxContext } from '../../contexts/SfxContext.js';

function Home() {
  const navigate = useNavigate();
  const { hoverSfx } = useContext(SfxContext);

  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button onClick={() => navigate("/game-on")} onMouseEnter={() => hoverSfx()}>Play Now</Button>
    </Container>
  );
}

export default Home;
