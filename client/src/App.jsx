import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { StoreProvider } from './utils/store-context';
import { AppStoreProvider } from './utils/GlobalState';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Auth from './utils/auth';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
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

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <AppStoreProvider>
        <div id="app-shell">
          <Nav />
          <Outlet />
          <Footer />
        </div>
        </AppStoreProvider>
      </StoreProvider>
    </ApolloProvider>
  )
}

export default App
