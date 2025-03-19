import { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  categoryId: string;
  setCategoryId: (id: string) => void;
}

const CategoryContext = createContext<CategoryContextType>({
  categoryId: "0", // Valor padrão explícito
  setCategoryId: () => {}
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState("0");
  
  return (
    <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);