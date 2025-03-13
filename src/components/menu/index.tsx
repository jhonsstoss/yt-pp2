import { 
  Container,
  MenuItem,
  StyledIcon,
  Line,
  ContainerCopy
} from "./styles";
import homeIcon from "../../assets/yt-home.svg"
import shortsIcon from "../../assets/yt-shorts.svg"
import subsIcon from "../../assets/yt-subs.svg"
import profIcon from "../../assets/yt-profile.svg"
import histIcon from "../../assets/yt-hist.svg"
import trendIcon from "../../assets/yt-trend.svg"
import musIcon from "../../assets/yt-music.svg"
import moviesIcon from "../../assets/yt-movies.svg"
import liveIcon from "../../assets/yt-live.svg"
import gamingIcon from "../../assets/yt-gaming.svg"
import newsIcon from "../../assets/yt-news.svg"
import sportsIcon from "../../assets/yt-sports.svg"
import coursesIcon from "../../assets/yt-courses.svg"
import podIcon from "../../assets/yt-pod.svg"
import ytIcon from "../../assets/yt.svg"
import musicIcon from "../../assets/yt-music-red.svg"
import kidsIcon from "../../assets/yt-kids.svg"
import settIcon from "../../assets/yt-settings.svg"
import reportIcon from "../../assets/yt-report.svg"
import helpIcon from "../../assets/yt-help.svg"
import sendIcon from "../../assets/yt-send.svg"
import { useNavigate } from "react-router-dom";





const items = [
  {icon: homeIcon, link: "/", name: "Home", isSvg: true},
  {icon: shortsIcon, link: "#", name: "Shorts", isSvg: true},
  {icon: subsIcon, link: "#", name: "Subscription", isSvg: true},
  {icon: profIcon, link: "/library", name: "You", isSvg: true},
  {icon: histIcon, link: "/history", name: "History", isSvg: true},
  {icon: trendIcon, link: "#", name: "Trending", isSvg: true},
  {icon: musIcon, link: "#", name: "Music", isSvg: true},
  {icon: moviesIcon, link: "#", name: "Movies", isSvg: true},
  {icon: liveIcon, link: "#", name: "Live", isSvg: true},
  {icon: gamingIcon, link: "#", name: "Gaming", isSvg: true},
  {icon: newsIcon, link: "#", name: "News", isSvg: true},
  {icon: sportsIcon, link: "#", name: "Sports", isSvg: true},
  {icon: coursesIcon, link: "#", name: "Courses", isSvg: true},
  {icon: podIcon, link: "#", name: "Podcasts", isSvg: true},
  {icon: ytIcon, link: "#", name: "Youtube Premium", isSvg: true},
  {icon: musicIcon, link: "#", name: "Youtube Music", isSvg: true},
  {icon: kidsIcon, link: "#", name: "Youtube Kids", isSvg: true},
  {icon: settIcon, link: "#", name: "Settings", isSvg: true}, 
  {icon: reportIcon, link: "#", name: "Report history", isSvg: true},
  {icon: helpIcon, link: "#", name: "Help", isSvg: true},
  {icon: sendIcon, link: "#", name: "Send feedback", isSvg: true},

]

interface IProps {
  openMenu: boolean;
}

const Menu = ({ openMenu } : IProps) => {
  const navigate = useNavigate()

  return (
    <Container openMenu={openMenu} >

      {items.map((item, index) => (
        <>
        <MenuItem key={index} openMenu={openMenu} onClick={() => navigate(item.link)}>
          <StyledIcon src={item.icon} alt={item.name} />
          {openMenu && <span>{item.name}</span>}
        </MenuItem>
        {index === 2 && <Line />}
        {index === 4 && <Line />}
        {index === 13 && <Line />}
        {index === 16 && <Line />}
        {openMenu && index === 20 && <Line />}
        
        </>
      ))}
      {openMenu && 
        <ContainerCopy>
          <span>Sobre Imprensa Direitos autorais Entre em contato Criadores de conteúdo Publicidade Desenvolvedores</span>
          <span>Termos Privacidade Política e segurança Como funciona o YouTube Testar os novos recursos</span>
          <span>© 2025 Google LLC</span>
        </ContainerCopy>
      }
      

    </Container>
  )
}

export default Menu;
