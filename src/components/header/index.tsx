import { 
  Container, 
  LogoContainer, 
  ButtonContainer, 
  ButtonIcon, 
  SearchContainer,
  SearchInputContainer, 
  SearchInput,
  SearchButton,
  HeaderButton,
  UserIcon,
  LoginButton,
  CameraButton,
  DropdownMenu
} from "./styles";
import HamburguerIcon from "../../assets/menu-hamburger.png"
import Logo from "../../assets/YouTube-Logo.png"
import SearchIcon from "../../assets/search.png"
import MicIcon from "../../assets/microfone-gravador.png"
import NotificationIcon from "../../assets/sino.png"
import CameraIcon from "../../assets/yt-cam.png"
import { useMenu } from "../../context/MenuContext"; 
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { toggleMenu } = useMenu();
  const navigate = useNavigate();
  const { login, logOut, user, userColor } = useContext(UserContext)
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <Container>
    <LogoContainer>
      <ButtonContainer onClick={toggleMenu} margin='0 10px 0 0'>
        <ButtonIcon alt="" src={HamburguerIcon}/>
      </ButtonContainer>
      <img 
        style={{cursor: 'pointer', width: '100px'}}
        alt=""
        src={Logo}
        />
    </LogoContainer>

    <SearchContainer>
      <SearchInputContainer>
        <SearchInput placeholder="Pesquisar" />
      </SearchInputContainer>
      <SearchButton>
        <ButtonIcon alt="" src={SearchIcon} />
      </SearchButton>
      <ButtonContainer margin='0 0 0 10px' >
        <ButtonIcon alt="" src={MicIcon}/>
      </ButtonContainer>
    </SearchContainer>

    <HeaderButton>

      {login && (
        <CameraButton margin='0 0 0 10px' onClick={() => navigate('/upload')}>
          <img src={CameraIcon} alt="Enviar vídeo" />
        </CameraButton>
      )}

      <ButtonContainer margin='0 0 0 10px' >
        <ButtonIcon alt="" src={NotificationIcon}/>
      </ButtonContainer>

      {login ? (
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <UserIcon 
            margin='0 0 0 10px'
            $backgroundColor={userColor}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </UserIcon>

          {showDropdown && (
            <DropdownMenu>
              <div onClick={() => navigate('/channel')}>
                Meu canal
              </div>
              <div onClick={logOut}>
                Sair
              </div>
            </DropdownMenu>
          )}
        </div>
        ) : (
          <LoginButton onClick={() => navigate('/login')}>
            Fazer Login
          </LoginButton>
        )}
      </HeaderButton>
    </Container>
  );
};

export default Header;
