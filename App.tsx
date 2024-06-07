import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/apolloClient';
import { Navigation } from './src/navigations/Navigation';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
