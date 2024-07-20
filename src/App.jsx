import { Outlet } from "react-router";
import MainSiteFooter from "./Shared/components/MainSiteFooter";
import MainSiteNav from "./Shared/components/MainSiteNav";
function App() {
  return (
    <>
      <MainSiteNav />
      <Outlet />
      <MainSiteFooter />
    </>
  );
}

export default App;
