import styled from "styled-components";
import { IoIosPlay, IoIosPause ,  IoIosSkipForward } from "react-icons/io";

export const MusicPlayerWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center; 
   height: 10vh;
   margin-bottom: 2rem;
   position: flex;
   bottom: 0;
   width: 100vw;
`

export const PlayIcon = styled(IoIosPlay)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor:pointer; 
`

export const PauseIcon = styled(IoIosPause)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor:pointer; 
`
export const SkipIcon = styled(IoIosSkipForward)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor:pointer; 
`