import { Outlet } from "react-router";
import MainSiteFooter from "./Shared/components/MainSiteFooter";
function App() {
  return (
    <>
      <Outlet />
      <MainSiteFooter />
    </>
  );
}

export default App;
