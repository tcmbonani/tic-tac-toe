import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from './Header.styled';
import {ReactComponent as Logo} from '../../assets/svgs/tic-tac-toe.svg';


function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <HeaderWrapper>
        <Logo className="logo" />

        <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </span>

    </HeaderWrapper>
  )
}

export default Header
