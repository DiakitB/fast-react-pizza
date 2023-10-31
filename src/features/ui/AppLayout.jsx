import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../cart/CartOverview';
import Header from './Header';
import Loader from './Loder';

function AppLayout() {
  // we use useNavigation hook for global navigation state and based on that we
  // we can load a spinner or a loader depending
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />
      <div className=" overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
