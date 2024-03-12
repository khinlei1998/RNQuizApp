import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
interface QuestionsProps {
    questionContent: string
}
const QuestionsBox: FC<QuestionsProps> = ({
    questionContent
}) => {
    return (
        <View style={styles.questionBox}>
            <Text style={styles.questionText}>{questionContent}</Text>
        </View>
    )
}

export default QuestionsBox

const styles = StyleSheet.create({
    questionBox: {
        margin: 15,

    },

    questionText: {
        fontSize: 30,
        color: "#31304D",
        fontWeight: 'bold'
    },
})