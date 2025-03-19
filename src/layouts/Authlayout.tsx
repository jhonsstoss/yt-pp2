import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Outlet /> {/* Aqui serão renderizadas as páginas de login/signup sem header/menu */}
    </div>
  );
};

export default AuthLayout;