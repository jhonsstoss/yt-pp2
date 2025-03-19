import { useState } from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
}

function VideoComponent(props: Props) {
  const [imgError, setImgError] = useState(false);
  const [channelImgError, setChannelImgError] = useState(false);


    return (
      <Container>
        <ImageBanner 
          alt='thumbnail' 
          src={imgError ? 'fallback-image.jpg' : props.thumbnail}
          onError={() => setImgError(true)}
        />
        <TitleContainer>
          <ChannelImage 
            alt='channel'
            src={channelImgError ? '/fallback-channel.jpg' : props.channelImage}
            onError={() => setChannelImgError(true)}
          />
          <TextContainer>
            <Title>{props.title}</Title>
            <TextCard>{props.channelName}</TextCard>
            <TextCard>{props.details}</TextCard>
          </TextContainer>
        </TitleContainer>
      </Container>
    )
  }
  
export default VideoComponent;