import styled from "styled-components";

export const BigHome = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div<{ openMenu: boolean }>`
  display: grid;
  column-gap: 20px;
  row-gap: 50px;
  transition: all 0.3s ease-in-out;
  margin: 45px 45px 0 20px;
  ${({ openMenu }) => openMenu 
    ? "grid-template-columns: repeat(4, 1fr);" 
    : "grid-template-columns: repeat(5, 1fr);"
  }
`;

