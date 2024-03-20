import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ScaledSheet, } from 'react-native-size-matters';
import ProgressBar from '../components/ProgressBar';
import AnswerScreen from './AnswerScreen';
const QuestionScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>

          <ProgressBar />

        </View>

      </SafeAreaView>
      <View style={styles.bodyContainer}>
        <Text style={styles.catergoryTitle}>What is the largest City by population in the world?</Text>

        <AnswerScreen />


      </View>
    </View>
  )
}

export default QuestionScreen

const styles = ScaledSheet.create({

  container: {
    flex: 1, backgroundColor: '#7A70F9'
  },

  headerContainer: {
    padding: '20@s',
  },
  headerTitle: { fontSize: '20@s', color: '#fff', },
  headerSubTitle: {
    fontWeight: 'bold',
  },

  bodyContainer: {
    flex: 1, backgroundColor: '#FAFAFA', borderTopRightRadius: '30@s', borderTopLeftRadius: '30@s',
  },
  catergoryTitle: {
    fontSize: '18@s', marginTop: '50@s', marginHorizontal: '15@s', fontWeight: 'bold', marginBottom: '20@s'
  }
})