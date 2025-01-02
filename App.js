import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {Navigator} from './src/navigation/navigator';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigator />;
};
