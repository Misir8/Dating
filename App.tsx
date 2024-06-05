import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/components/SplashScreen';
import { FirstLogin } from './src/components/FirstLogin';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/apolloClient';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ApolloProvider client={client}>
      {showSplash ? <SplashScreen /> : <FirstLogin />}
    </ApolloProvider>
  );
};

export default App;
