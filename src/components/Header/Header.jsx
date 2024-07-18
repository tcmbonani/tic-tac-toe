import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled';
import {ReactComponent as Logo} from '../../assets/svgs/tic-tac-toe.svg';
import { useNavigate } from 'react-router-dom';
import { SfxContext } from '../../contexts/SfxContext';




function Header() {
  const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { hoverSfx, clickSfx } = useContext(SfxContext)

  return (

    <HeaderWrapper>
        <Logo 
        className="logo" 
        onClick={() => {
        clickSfx();
        navigate ("/");

        }} onMouseEnter={() => hoverSfx()}/>

        <span 
        onClick={() => {
          clickSfx();
          toggleTheme()
          }} onMouseEnter={() => hoverSfx()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </span>

    </HeaderWrapper>
  )
}

export default Header
