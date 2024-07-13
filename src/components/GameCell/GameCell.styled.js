import styled from "styled-components";

export const CellStyle = styled.button`
background-color: ${(props) => props.theme.colors.secondary};
color: ${(props) => props.theme.colors.primary};
font-size: 3rem;
border: none;
width: 10rem;
height: 9rem;
border-radius: 10px;
box-shadow: 5px 10px #455141;
cursor: pointer; 
padding:-4rem 3rem;

.outlineIcon{
    path {
        stroke:  ${(props) => props.theme.colors.primary};
        stroke-width: 0;
    }
}

    &:hover {
        .outlineIcon{
    path {
        stroke:  ${(props) => props.theme.colors.primary};
        stroke-width: 2;
    }
    }

    .CellStyle {
  /* Your existing CellStyle styles */
  position: relative; /* Ensure relative positioning for absolute positioning */
}

.iconWrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0; /* Hide icons by default */
  transition: opacity 0.3s ease; /* Smooth transition for opacity */
}

.iconWrapper.hoverIcon {
  opacity: 1; /* Show icons when hovered */
}

}
`