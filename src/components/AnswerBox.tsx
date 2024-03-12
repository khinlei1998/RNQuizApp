import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { FC } from 'react'
interface Answer {
    key: string,
    content: string
}
interface AnswerBoxProps {
    answers: Answer[]
}
const AnswerBox: FC<AnswerBoxProps> = ({ answers }) => {
    return (
        <>
            {answers.map((ans, index) => {
                return (
                    <TouchableHighlight key={index}>
                        <View style={styles.answerBox}>
                            <Text style={styles.answerText}>{ans.content}</Text>
                        </View>
                    </TouchableHighlight>
                )

            })}
        </>


    )
}

export default AnswerBox

const styles = StyleSheet.create({
    answerBox: {
        margin:15,
        backgroundColor: '#fff',
        width: '90%',
        paddingVertical: 20,
        borderRadius: 10,
    },
    answerText: {
        left: 20,
        color: '#161A30'
    },
})