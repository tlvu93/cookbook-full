import { ApolloProvider } from '@apollo/client';
import './index.css';
import client from '../apollo/apollo';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
