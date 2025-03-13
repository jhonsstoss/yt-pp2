import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextProps {
  openMenu: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <MenuContext.Provider value={{ openMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu deve ser usado dentro de um MenuProvider");
  }
  return context;
};
