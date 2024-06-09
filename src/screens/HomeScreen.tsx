import { Splash } from '../components/Splash';
import { FirstLogin } from '../components/FirstLogin';
import React, { useEffect, useState } from 'react';

export const HomeScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <Splash /> : <FirstLogin />;
};
