import styled from "styled-components";


export const Container = styled.div<{ openMenu: boolean }>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  
  column-gap: 20px;
  row-gap: 50px;
  transition: all 0.3s ease-in-out;
  ${({ openMenu }) => openMenu 
    ? "grid-template-columns: repeat(5, 1fr);" 
    : "grid-template-columns: repeat(4, 1fr);"
  }
`;