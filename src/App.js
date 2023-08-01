import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main/Main';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop'
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/ProductsAndCartLoader';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },

        {
          path: '*',
          element: <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h1 style={{color: 'gray'}}>404 | Nothing Hare To Seen</h1></div>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
