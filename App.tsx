
import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import StartScreen from './src/screens/StartScreen';
import GameScreen from './src/screens/GameScreen';
function App(): React.JSX.Element {
  const [isPlaying, setPlaying] = useState<boolean>(false)
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        {!isPlaying ? <StartScreen /> : <GameScreen />}

      </SafeAreaView>
    </>
  );
}


export default App;
