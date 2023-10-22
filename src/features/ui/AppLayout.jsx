import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loader from "./Loder";

function AppLayout() {
  // we use useNavigation hook for global navigation state and based on that we
  // we can load a spinner or a loader depending
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
