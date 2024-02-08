import { Outlet, Navigate } from "react-router-dom";
import { getAuthUser } from "../Helpers/Storage";

const GuestProfile = () => {
  const auth = getAuthUser();

  return <>{auth ? <Outlet /> : Navigate("/")}</>;
};

export default GuestProfile;
