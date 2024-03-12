import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
interface StartScreenProps {
  startGame: () => void;
}
const StartScreen:FC<StartScreenProps>=({startGame}) => {
  return (
    <View style={styles.body} >
      <View style={styles.titleHeading} >
        <Text style={styles.title}>Quiz Application</Text>
      </View>

      <View>
        <TouchableHighlight style={styles.startButton} onPress={startGame}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#497A78'
  },
  title: {
    color: '#fff',
    fontSize: 30
  },
  startButton: {
    backgroundColor: '#F8C660',
    minWidth:200,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:10
  },
  titleHeading:{
    marginBottom:20
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  }
});
export default StartScreen