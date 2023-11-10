// we are going to import createBrowserRouter function from react dom

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './features/ui/Home';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as creatOrderAction,
} from './features/order/CreateOrder';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './features/ui/AppLayout';
import Error from './features/ui/Error';
// import { action } from "./features/order/CreateOrder";

// createBrowserRouter([]), this function takes an array of objects that discribe our paths

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: creatOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  // returning the the routerProvider and pass in the router as prop
  return <RouterProvider router={router} />;
}

export default App;
