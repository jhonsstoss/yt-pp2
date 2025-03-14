import TopBar from "../../components/topBar";
import VideoComponent from "../../components/videoComponent";
import { useMenu } from "../../context/MenuContext";
import { Container, BigHome } from "./styles";

const Home = () => {
  const {openMenu} = useMenu();
  console.log("openMenu está:", openMenu);

  return (
    <BigHome>
      <TopBar />
      <Container openMenu={openMenu}>
        {Array.from({ length: 12 }).map((_, index) => (
          <VideoComponent key={index} />
        ))}
      </Container>
    </BigHome>
  );
};

export default Home;
