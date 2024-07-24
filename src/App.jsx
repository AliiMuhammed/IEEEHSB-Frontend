import { Outlet } from "react-router";
import MainSiteFooter from "./Shared/components/MainSiteFooter";
import MainSiteNav from "./Shared/components/MainSiteNav";
import MyToast from "./Shared/components/MyToast";
import MovetoTop from "./Shared/components/MovetoTop";
function App() {
  return (
    <>
      <MainSiteNav />
      <Outlet />
      <MyToast />
      <MainSiteFooter />
      <MovetoTop />
    </>
  );
}

export default App;
