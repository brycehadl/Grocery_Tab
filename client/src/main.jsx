import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound.jsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
