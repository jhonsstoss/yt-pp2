import { useEffect, useState } from "react";
import TopBar from "../../components/topBar";
import VideoComponent from "../../components/videoComponent";
import { useMenu } from "../../context/MenuContext";
import { Container, BigHome } from "./styles";
import axios from "axios";
import moment from 'moment';
import { useCategoryContext } from "../../context/searchCategories";

const Home = () => {

  interface Videos {
    id: string;
    snippet: {
      title: string;
      channelId: string;
      thumbnails: {
        default: { // Adicione esta linha
          url: string;
        };
        high: { url: string };
        standard?: { url: string };
        maxres?: { url: string };
      };
      channelTitle: string;
      publishedAt: string;
    };
    statistics?: {
      viewCount: string;
    };
  }

  const [channelThumbnails, setChannelThumbnails] = useState<{ [key: string]: string }>({});
  const [videos, setVideos] = useState<Videos[]>([]);
  const {categoryId} = useCategoryContext()
  const API_KEY = 'AIzaSyB9t6w7tiW1Rsh0cF31qsOhd4THtNHdzTI'

  // const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=BR&videoCategoryId=${categoryId || 0}&key=${API_KEY}`;

  // const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=BR${
  //   categoryId && categoryId !== '0' ? `&videoCategoryId=${categoryId}` : ''
  // }&key=${API_KEY}`;

 

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        console.log("CategoryId atual:", categoryId); // Verifique se está atualizando

        const validCategory = categoryId && categoryId !== '0' ? categoryId : '';
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=BR${validCategory ? `&videoCategoryId=${validCategory}` : ''}&key=${API_KEY}`;

        console.log("URL:", url); // Verifique a URL gerada

        const response = await axios.get(url);
        console.log("Vídeos recebidos:", response.data.items.length);
        setVideos(response.data.items);

        const channelIds = response.data.items.map((video: Videos) => video.snippet.channelId);
        const uniqueChannelIds = [...new Set(channelIds)]; // Remove IDs duplicados

        const channelsResponse = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${uniqueChannelIds.join(',')}&key=${API_KEY}`
        );

        const thumbnailsMap = channelsResponse.data.items.reduce((acc: any, channel: any) => {
          acc[channel.id] = channel.snippet.thumbnails.default.url;
          return acc;
        }, {});

        setChannelThumbnails(thumbnailsMap);

      } catch (error) {
        console.error("Erro na API:", error);
  
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [categoryId]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  function formatViewCount(viewCount: number): string {
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
    } else {
      return `${viewCount} visualizações`;
    }
  }

  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, 'days');

    if (diffDays <= 0) {
      return 'hoje';
    } else if (diffDays === 1) {
      return 'há 1 dia';
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return 'há 1 semana';
      } else {
        return `há ${diffWeeks} semanas`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return 'há 1 mês';
      } else {
        return `há ${diffMonths} meses`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return 'há 1 ano';
      } else {
        return `há ${diffYears} anos`;
      }
    }
  }

  const {openMenu} = useMenu();
  
  return (
    
    <BigHome openMenu={openMenu}>
      <TopBar />
      <Container openMenu={openMenu}>
        {!loading && !error && videos.map((video) => (
          <VideoComponent
          key={video.id}
          title={video.snippet.title}
          thumbnail={
            video.snippet.thumbnails.maxres?.url || 
            video.snippet.thumbnails.standard?.url || 
            video.snippet.thumbnails.high.url
          }
          channelImage={channelThumbnails[video.snippet.channelId]}
          channelName={video.snippet.channelTitle}
          details={`${video.statistics?.viewCount ? formatViewCount(Number(video.statistics.viewCount)) : 'Visualizações indisponíveis'} - ${getPublishedTime(video.snippet.publishedAt)}`}
          />
        ))}
      </Container>
    </BigHome>
  );
};


export default Home;
