import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale, ScaledSheet, } from 'react-native-size-matters';

const RadioButton = () => {
    return (
        <View style={styles.radioContainer}>
            <View style={styles.radioSubContainer} />

        </View>
    )
}

export default RadioButton

const styles = ScaledSheet.create({
    radioContainer: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#7A70F9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    radioSubContainer: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#7A70F9',
    }


})