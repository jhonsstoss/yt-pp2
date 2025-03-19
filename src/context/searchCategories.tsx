// import { createContext, useContext, useState } from "react";

// interface CategoryContextData {
//   categoryId: string;
//   setCategoryId: (id: string) => void;
// }



// interface CategoryContextProps {
//   children: React.ReactNode;
// }

// const CategoryContext = createContext<CategoryContextData>({} as CategoryContextData);

// export const CategoryProvider: React.FC<CategoryContextProps> = ({ children }) => {
//   const [categoryId, setCategoryId] = useState('0');

//   return (
//     <CategoryContext.Provider value={{ categoryId, setCategoryId }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };

// export function useCategoryContext() {
//   return useContext(CategoryContext);
// }

import { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  categoryId: string;
  contentType: 'videos' | 'shorts'; // Adicione isto
  setCategoryId: (id: string) => void;
  setContentType: (type: 'videos' | 'shorts') => void;
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