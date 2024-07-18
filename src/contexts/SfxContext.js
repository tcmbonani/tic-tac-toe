import { createContext } from 'react';
import useSound from '../hooks/useSound';
import React from "react";

export const SfxContext = createContext({});

export function SFxContextProvider({children}){

    const options = {
        volume: 0.05,
        timeout: 200
        
    }




    const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
    const clickPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
    const winnerPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
    const completePath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

    const hoverSfx = useSound(hoverPath, options)
    const clickSfx = useSound(clickPath, options)
    const winSfx = useSound(winnerPath, {...options, timeout: 1000})
    const completedSfx = useSound(completePath, {...options, timeout: 2300})

    const playMySound = useSound("/src/Mp3/Future - Mask Off (Official Music Video).mp3", { volume: 0.5 });

    return (
      <SfxContext.Provider value={{hoverSfx,clickSfx,winSfx,completedSfx}} onClick={playMySound}>
      {children}
  </SfxContext.Provider>
  );

}

