import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/store-context';
import { createStore } from "redux";
import { reducer } from "./utils/reducer";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './components/Login';
import Auth from './utils/auth'

import './app.scss';
import { Provider } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';


const httpLink = createHttpLink({ uri: '/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const globalState = {
  cart: [],
  products: [],
  categories: [],
};

const store = createStore(
  reducer,
  globalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
      <Provider store={store}>
        <div id="app-shell">
          <Nav />
          {Auth.loggedIn() ? <Outlet /> : <Login />}
          <Footer />
        </div>
        </Provider>
      </StoreProvider>
    </ApolloProvider>
  )
}

export default App
