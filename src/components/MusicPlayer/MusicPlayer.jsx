import React, { useEffect, useRef , useState } from 'react';
import { MusicPlayerWrapper } from './MusicPlayer.styled';
import playList from '../../utils/MusicUtils/playlist';
import { rendomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon ,SkipIcon } from './MusicPlayer.styled';



function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(rendomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if(isPlaying){
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause()
      setIsPlaying(false);
    })
    setCurrentSong(rendomizeIndex(playList));
    setIsPlaying(true);
  }

  const displaySong = playList[currentSong].split("/")[6]
  return (
    <MusicPlayerWrapper>
      {
        isPlaying ?  (
          <PauseIcon onClick={() => setIsPlaying(false)}/>
      ) : (
        <PlayIcon onClick={() => setIsPlaying(true)}/>
      )}
       
       < SkipIcon onClick={shuffleHandler}/>

        <audio 
        ref={playerRef}
        src={playList[currentSong]} 
        nEnded={shuffleHandler}></audio>
        <p>{displaySong}</p>
   </MusicPlayerWrapper>
  )
}

export default MusicPlayer