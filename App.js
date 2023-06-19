/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/Views/Navigation/AuthStack';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

const App =() => {
 return (
  <Provider store={store}>
 <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  </Provider>
  );
}

export default App;
