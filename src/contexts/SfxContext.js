import { createContext } from 'react';
import useSound from '../hooks/useSound';
import React from "react";

export const SfxContext = createContext({});

export function SFxContextProvider({children}){

    const options = {
        volume: 0.05
        
    }




    const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
    const hoverSfx = useSound(hoverPath, options)

    const playMySound = useSound("/src/Mp3/Future - Mask Off (Official Music Video).mp3", { volume: 0.5 });

    return (
      <SfxContext.Provider value={{hoverSfx}} onClick={playMySound}>
      {children}
  </SfxContext.Provider>
  );

}

