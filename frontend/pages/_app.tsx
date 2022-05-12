import {ApolloProvider} from '@apollo/client';
import './styles.css';
import client from '../apollo/apollo';
import React from 'react';
import {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
