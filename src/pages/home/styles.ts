import styled from "styled-components";

export const BigHome = styled.div<{openMenu: boolean}>`
  width: calc(100vw - ${({openMenu}) => openMenu ? '260px' : '80px'});
  margin-left: ${({openMenu}) => openMenu ? '250px' : '70px'};
  margin-top: 115px;
  padding: 20px;
  box-sizing: border-box;
  transition: margin-left 0.3s ease;
  overflow-x: hidden; // Impede scroll horizontal
`;

// export const Container = styled.div<{ openMenu: boolean }>`
//   display: grid;
//   column-gap: 20px;
//   row-gap: 50px;
//   transition: all 0.3s ease-in-out;
//   margin: 45px 45px 0 20px;
//   ${({ openMenu }) => openMenu 
//     ? "grid-template-columns: repeat(4, 1fr);" 
//     : "grid-template-columns: repeat(5, 1fr);"
//   }
// `;

export const Container = styled.div<{ openMenu: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1600px;
  margin: 0 auto;
`;

