import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound.jsx'

import SignUp from './pages/SignUp';
import Login from './components/Login';

import './index.css';

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
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
