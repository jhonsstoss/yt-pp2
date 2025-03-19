import Header from "../components/header";
import Menu from "../components/menu";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Header />
      <Menu />
      <Outlet /> {/* Aqui serão renderizadas as páginas autenticadas */}
    </div>
  );
};

export default MainLayout;