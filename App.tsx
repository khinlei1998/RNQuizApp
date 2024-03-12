import React, { FC, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import StartScreen from './src/screens/StartScreen';
import GameScreen from './src/screens/GameScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
export type StackParamList = {
  Welcome: undefined,
  Login: undefined,
  SignUp:undefined,
  Home:undefined
}

const App: FC = () => {
  const [isPlaying, setPlaying] = useState(false);

  function startGame() {
    setPlaying(true);
  }

  const Stack = createNativeStackNavigator<StackParamList>();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>

    // <>
    //   <StatusBar barStyle="dark-content" />

    //   <SafeAreaView style={{ flex: 1 }}>
    //     <LoginScreen />
    //     {/* {!isPlaying ? <StartScreen startGame={startGame} /> : <GameScreen />} */}
    //   </SafeAreaView>
    // </>
  );
};

export default App;
