import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DynamicContainer from "./DynamicContainer";

export default function MainLayout() {
  return (
    <div id="main-layout">
      <Header />
      <DynamicContainer>
        <Outlet />
      </DynamicContainer>
      <Footer />
    </div>
  );
}
