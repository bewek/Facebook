// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Friends, Home, Market, Menu, Message, Notification, Video } from '../../Screens';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
  );
}

export default AuthStack;