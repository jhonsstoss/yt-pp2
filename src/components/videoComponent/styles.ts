import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  width: 100%; // Largura fixa para os cards
  margin: 8px;
  cursor: pointer;
  min-height: 300px;
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  background-color: #f0f0f0; 
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px; // add
`;

export const ChannelImage = styled.img`
  /* background-color: beige;
  width:40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px; */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 48px);  // Ajuste para o canalImage
  font-family: 'Roboto', 'Arial', sans-serif
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
  overflow: hidden; //
  display: -webkit-box; //
  -webkit-line-clamp: 2; // Limita a 2 linhas
  -webkit-box-orient: vertical; //
`;

export const TextCard = styled.span`
  color: #606060;
  font-size: 14px;
  margin-top: 4px;
`;