/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CallScreen from './src/screens/CallScreen';
import HomeScreen from './src/screens/HomeScreen';
import JoinScreen from './src/screens/JoinScreen';
import RoomScreen from './src/screens/RoomScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CallRoom">
        <Stack.Screen
          name="Room"
          component={RoomScreen}
          options={{title: 'Select Room'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Call"
          component={CallScreen}
          options={{title: 'Call'}}
        />
        <Stack.Screen
          name="Join"
          component={JoinScreen}
          options={{title: 'Join'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
