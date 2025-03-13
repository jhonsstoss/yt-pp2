import VideoComponent from "../../components/videoComponent";
import { useMenu } from "../../context/MenuContext";
import { Container } from "./styles";

const Home = () => {
  const {openMenu} = useMenu();
  console.log("openMenu está:", openMenu);

  return (
    <Container openMenu={openMenu}>
      {Array.from({ length: 12 }).map((_, index) => (
        <VideoComponent key={index} />
      ))}
    </Container>
  );
};

export default Home;
