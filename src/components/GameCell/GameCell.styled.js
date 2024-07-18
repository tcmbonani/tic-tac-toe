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

.markedItem {
    path {
        stroke: ${(props) => props.theme.colors.primary};
    }
}

.outlineIcon{
    path {
        stroke:${(props) => props.theme.colors.primary};
        stroke-width: 0;
    }
}

    &:hover {
        .outlineIcon{
    path {
        stroke-width: 2;
    }
    }

}

`