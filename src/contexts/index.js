import React from 'react';
import { ThemeContextProvider } from './ThemeContext';
import { GameContextProvider  } from './GameContext';
import { SFxContextProvider } from './SfxContext';


function Provider({children}) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SFxContextProvider>
      {children}
        </SFxContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  )
}

export default Provider
