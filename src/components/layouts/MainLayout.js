import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DynamicContainer from "./DynamicContainer";

export default function MainLayout() {
  return (
    <div id="main-layout" className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <DynamicContainer>
          <Outlet />
        </DynamicContainer>
      </div>
      <Footer />
    </div>
  );
}
