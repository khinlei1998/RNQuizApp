import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
interface HeaderProps {
    totalQuestions:number,
    currentQuestion:number
}
const Header: FC<HeaderProps> = ({totalQuestions,currentQuestion }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Question {currentQuestion} of {totalQuestions}</Text>
            <View style={{ marginRight: 10 }}>
                <Text>7</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
    },
    headerText: {
        color: "#31304D",
        fontSize: 15

    },
})

