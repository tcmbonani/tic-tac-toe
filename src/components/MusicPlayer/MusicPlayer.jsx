import React, { useContext, useEffect, useRef , useState } from 'react';
import { MusicPlayerWrapper } from './MusicPlayer.styled';
import playList from '../../utils/MusicUtils/playlist';
import { rendomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon ,SkipIcon } from './MusicPlayer.styled';
import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled"



function MusicPlayer() {
  const {hoverSfx, clickSfx} = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(rendomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if(isPlaying){
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if(playerRef.current?.volume){
        playerRef.current.volume = 0.1;
      }
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    clickSfx();
    setIsPlaying(false);
    await playPromise.then(() => {
    playerRef.current.pause();
    })
    setCurrentSong(rendomizeIndex(playList));
    setIsPlaying(true);
  }

  const displaySong = playList[currentSong].split("/")[6]
  return (
    <MusicPlayerWrapper>
      {
        isPlaying ?  (
          <PauseIcon 
          onClick={() => 
            { clickSfx();
              setIsPlaying(false)
            }} 
          onMouseEnter={() => hoverSfx()}/>
      ) : (
        <PlayIcon 
        onClick={() =>           
          { clickSfx();
            setIsPlaying(true)
        }} 
        onMouseEnter={() => hoverSfx()}/>
      )}
       
       < SkipIcon 
       onClick={shuffleHandler} 
       onMouseEnter={() => hoverSfx()}/>

        <audio 
        ref={playerRef}
        src={playList[currentSong]} 
        nEnded={shuffleHandler}></audio>
        <Text>{displaySong}</Text>
   </MusicPlayerWrapper>
  )
}

export default MusicPlayer