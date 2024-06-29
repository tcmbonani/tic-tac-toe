import styled from "styled-components";

export const CellStyle = styled.button`
background-color: ${(props) => props.theme.colors.secondary};
color: ${(props) => props.theme.colors.primary};
font-size: 3rem;
border: none;
width: 10rem;
height: 8rem;
border-radius: 10px;
box-shadow: 5px 10px #455141;
cursor: pointer; 
padding:0rem -2.5rem;

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
}
`