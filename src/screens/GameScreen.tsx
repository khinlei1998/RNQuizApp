import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { questions } from '../quizdata.json'
import QuestionsBox from '../components/QuestionsBox'
import AnswerBox from '../components/AnswerBox'
import ProfileHeader from '../components/ProfileHeader'
export default function GameScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionContent = questions[currentQuestion]
  return (
    <View style={styles.wrapper}>
      <ProfileHeader />
      <Header totalQuestions={questions.length} currentQuestion={currentQuestion + 1} />
      <QuestionsBox questionContent={questionContent.content} />
      <AnswerBox answers={questionContent.answers} />

      <View style={styles.btnNext}>
        <Text style={styles.nextText}>Next</Text>
      </View>
      {/* <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
        }}>
          <Text style={{
            color: "#31304D",
            fontSize: 15
          }}>Question 1</Text>
          <View style={{ marginRight: 10 }}>
            <Text>7</Text>
          </View>
        </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    // height: '100%',
    backgroundColor: '#EFECE5',
  },
  btnNext: {
    marginLeft: 10,
    backgroundColor: '#31304D',
    width: '95%',
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20,

  },
  nextText: {
    color: '#fff',
    textAlign: 'center'
  }
})