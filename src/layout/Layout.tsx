import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import { Outlet } from "react-router-dom";
import { RoleManagerProvider } from "../util/RoleManagerContext";

const Layout = () => {
  return (
    <RoleManagerProvider>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </RoleManagerProvider>
  );
};

export default Layout;
