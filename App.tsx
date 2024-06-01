import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/components/SplashScreen';
import { FirstLogin } from './src/components/FirstLogin';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <FirstLogin />;
};

export default App;
