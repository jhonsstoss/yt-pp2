import { useEffect, useRef, useState } from "react";
import { Container, Categorys, BigContainer, ScrollButton } from "./styles";
import { useCategoryContext } from "../../context/searchCategories";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMenu } from "../../context/MenuContext";

interface Category {
  id: string;
  snippet: {
    title: string;
  };
}

const TopBar = () => {
  const { setCategoryId } = useCategoryContext();
  const { openMenu } = useMenu();
  const [categories, setCategories] = useState<Category[]>([]);
  const [showScroll, setShowScroll] = useState({ left: false, right: true });
  const scrollRef = useRef<HTMLDivElement>(null);
  const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=BR&key=${YOUTUBE_KEY}`
        );
        setCategories([
          { id: "0", snippet: { title: "Tudo" } }, // Categoria padrão
          ...response.data.items,
        ]);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "right" ? 300 : -300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      
      // Atualiza visibilidade dos botões após 300ms
      setTimeout(() => {
        const showLeft = container.scrollLeft > 0;
        const showRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
        setShowScroll({ left: showLeft, right: showRight });
      }, 300);
    }
  };

  const checkScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const showLeft = container.scrollLeft > 0;
      const showRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
      setShowScroll({ left: showLeft, right: showRight });
    }
  };

  return (
    <BigContainer openMenu={openMenu}>
      {showScroll.left && (
        <ScrollButton left onClick={() => handleScroll("left")}>
          <FaChevronLeft />
        </ScrollButton>
      )}

      <Container 
        ref={scrollRef} 
        onScroll={checkScroll}
        onLoad={checkScroll}
      >
        {categories.map((category) => (
          <Categorys 
            key={category.id}
            onClick={() => {
              setCategoryId(category.id);
              window.scrollTo(0, 0);
            }}
          >
            {category.snippet.title}
          </Categorys>
        ))}
      </Container>

      {showScroll.right && (
        <ScrollButton right onClick={() => handleScroll("right")}>
          <FaChevronRight />
        </ScrollButton>
      )}
    </BigContainer>
  );
};

export default TopBar;