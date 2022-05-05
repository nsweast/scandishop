import MainPage from './pages/MainPage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      Attribute: {
        keyFields: ['value'],
      },
      AttributeSet: {
        keyFields: ['items', ['value'], 'name'],
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainPage />;
    </ApolloProvider>
  );
}

export default App;
