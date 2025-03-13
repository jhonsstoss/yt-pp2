import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent() {
  
    return (
      <Container>
        <ImageBanner src="https://i.ytimg.com/vi/FtMwVBKPvQk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAU0_x4vnyoxBD7h8QneJXB7FdAkg" />
        <TitleContainer>
          <ChannelImage src="https://yt3.ggpht.com/ytc/AIdro_m3o1hVdTIlnMGLrABDdlyQK28Ps9sZJpOVAoq8TlyBfx8=s68-c-k-c0x00ffffff-no-rj" />
          <TextContainer>
            <Title>Konebu @ Cosmic Pacha</Title>
            <TextCard>Sangoma Records</TextCard>
            <TextCard>59 mil visualizações • há 2 anos</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    )
  }
  
export default VideoComponent;