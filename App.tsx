
import React, { useState, createContext, useContext } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import StartScreen from './src/screens/StartScreen';
import GameScreen from './src/screens/GameScreen';
// import { UseStartContext } from './src/Context/Context';
interface StartScreenProps {
  startGame: () => void;
}

// Step 2: Create a context for the start screen
const StartContext = createContext<StartScreenProps | undefined>(undefined);

// Step 3: Create a component that consumes the context
const ThemeContext = () => useContext(StartContext);

function App(): React.JSX.Element {
  const startGame = () => {
    console.log('Starting the game...');
    // Add logic to start the game
  };
  const [isPlaying, setPlaying] = useState<boolean>(false)
  // const [theme, setTheme] = useState<Theme>('light');
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <StartContext.Provider value={{ startGame }}>
          <StartScreen />
        </StartContext.Provider>
        {/* <UseStartContext.Provider value={{ startGame }}>
          <StartScreen />
        </UseStartContext.Provider> */}


      </SafeAreaView>
    </>
  );
}


export default App;
