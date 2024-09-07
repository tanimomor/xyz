import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
          <Outlet />
      )}
    </>
  );
};

export default HomeLayout;
