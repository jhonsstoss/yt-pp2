import styled from "styled-components";

// export const Container = styled.div<{openMenu: boolean}> `
//   width: ${({openMenu}) => openMenu? '250px' : '70px'};
//   height: calc(100vh - 55px); // se der merda, 100vh - 55px
//   box-sizing: border-box;
//   padding: 0px 10px 10px 10px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   overflow-y: auto;
//   position: sticky;
//   top: 55px;
// `;

export const Container = styled.div<{openMenu: boolean}> `
  width: ${({openMenu}) => openMenu? '240px' : '70px'};
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: 0px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  top: 55px; // Abaixo do Header
  left: 0;
  z-index: 500; // Menor que o Header
  background-color: white;
  transition: width 0.3s ease;
`;

export const MenuItem = styled.div<{ openMenu: boolean; isDivider?: boolean }>`
  width: 98%;
  min-height: ${({openMenu}) => openMenu? '50px' : '40px'};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
  align-items: center;
  justify-content: ${({openMenu}) => openMenu? 'flex-start' : 'center'};

  span {
    font-weight: ${({openMenu}) => openMenu? '600' : '400'};
    margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
    font-size: ${({openMenu}) => openMenu? '15px' : '12px'};
  }


  :hover {
    background-color: #f2f2f2;
  }

 
`;


export const StyledIcon = styled.img`
  width: 25px;
  height: 25px;
  color: black; /* Ou qualquer cor desejada */
`;

export const Line = styled.hr`
  width: 99%;
  border: 0.5 solid #333;
  margin: 5px 0;
  padding: 0;
`;

export const ContainerCopy = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  
  span {
    margin-top: 6px;
    padding: 10px 0 0 0; 
    font-size: 12px
  }
`;
