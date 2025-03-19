import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed; // Alterado de sticky para fixed
  top: 0;
  left: 0;
  z-index: 1000; // Aumentado o z-index
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({margin}) => margin? margin : 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

    &:hover {
    background-color: #e1e1e1;
  }
`;

export const UserIcon = styled(ButtonContainer)<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  font-weight: 500;
  color: #0f0f0f;

  &:hover {
    background-color: ${({ $backgroundColor }) => $backgroundColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #065fd4;
  color: #065fd4;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #def0ff;
  }
`;

export const LogoutButton = styled.span`
  color: #065fd4;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: #def0ff;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 55px;
  right: 20px;
  background: white;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 200px;
  z-index: 1001;
  padding: 8px 0;

  div {
    padding: 12px 16px;
    cursor: pointer;
    color: #606060;
    font-size: 14px;

    &:hover {
      background-color: #f8f8f8;
    }
  }
`;

export const CameraButton = styled(ButtonContainer)`
  background-color: white;
  transition: all 0.2s;
  
  &:hover {
    background-color: #e1e1e1;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;