// import styled from "styled-components";

// export const BigContainer = styled.div`
//   width: 100%;
//   margin-left: 0px;
//   position: fixed;
//   margin-top: 0;
// `;

// export const Container = styled.div`
//   overflow-x: scroll;
//   display: flex;
//   background-color: white;
//   padding-left: 14px;
//   border-top: 1px solid 1px solid rgba(255, 255, 255, 0.1);
//   border-bottom: 1px solid 1px solid rgba(255, 255, 255, 0.1);

//    &::-webkit-scrollbar {
//     height: 0;
//   }
// `;

// export const Categorys = styled.button`
//   margin: 12px 6px;
//   background-color:rgb(224, 224, 224);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 8px;
//   white-space: nowrap;
//   cursor: pointer;
//   color: black;
//   transition: .5s;

//   &:hover {
//     background-color:rgb(90, 90, 90);
//   }

// `;

import styled from "styled-components";

export const BigContainer = styled.div<{openMenu: boolean}>`
  width: calc(100vw - ${({openMenu}) => openMenu ? '270px' : '85px'}) !important;
  margin-left: 0;
  position: fixed;
  top: 55px;
  z-index: 800;
  background: white;
  transition: all 0.3s ease;
  height: 55px;
  overflow: hidden;
`;

export const Container = styled.div`
  overflow-x: auto;
  display: flex;
  padding: 2px 2px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Categorys = styled.button`
  margin: 0 3px;
  padding: 8px 12px;
  background: #f0f0f0;
  border: none;
  border-radius: 8px;
  white-space: nowrap;
  cursor: pointer;
  color: #333;
  transition: all 0.2s;
  font-size: 14px;

  &:hover {
    background: #e0e0e0;
  }

  &:active {
    background: #d0d0d0;
  }
`;

export const ScrollButton = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 40%;
  ${({ left }) => left && "left: 0px;"}
  ${({ right }) => right && "right: 8px;"}
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 0;
  width: 32px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.2s;

  &:hover {
    background: #f8f8f8;
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;