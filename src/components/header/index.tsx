import { 
  Container, 
  LogoContainer, 
  ButtonContainer, 
  ButtonIcon, 
  SearchContainer,
  SearchInputContainer, 
  SearchInput,
  SearchButton,
  HeaderButton
} from "./styles";
import HamburguerIcon from "../../assets/menu-hamburger.png"
import Logo from "../../assets/YouTube-Logo.png"
import SearchIcon from "../../assets/search.png"
import MicIcon from "../../assets/microfone-gravador.png"
import VideoIcon from "../../assets/video.png"
import NotificationIcon from "../../assets/sino.png"
import { useMenu } from "../../context/MenuContext"; 

const Header = () => {
  const { toggleMenu } = useMenu();

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
      <ButtonContainer margin='0 0 0 10px' >
        <ButtonIcon alt="" src={VideoIcon}/>
      </ButtonContainer>
      <ButtonContainer margin='0 0 0 10px' >
        <ButtonIcon alt="" src={NotificationIcon}/>
      </ButtonContainer>
      <ButtonContainer margin='0 0 0 10px' >
        J
      </ButtonContainer>
    </HeaderButton>
  </Container>
  )
}

export default Header;
