import styled from "styled-components";

export const BigContainer = styled.div`
  width: 100%;
  margin-left: 0px;
  position: fixed;
  margin-top: 0;
`;

export const Container = styled.div`
  overflow-x: scroll;
  display: flex;
  background-color: white;
  padding-left: 14px;
  border-top: 1px solid 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid 1px solid rgba(255, 255, 255, 0.1);

   &::-webkit-scrollbar {
    height: 0;
  }
`;

export const Categorys = styled.button`
  margin: 12px 6px;
  background-color:rgb(224, 224, 224);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  white-space: nowrap;
  cursor: pointer;
  color: black;
  transition: .5s;

  &:hover {
    background-color:rgb(90, 90, 90);
  }

`;