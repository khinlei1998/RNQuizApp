import { Image, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, ScaledSheet, } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
const ResultScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.headerTitle}>Music Quiz Result</Text>
            <Image source={require('../images/congratulation.png')} style={{ width: 300, height: 300 }} />
            <Text style={styles.answerTitle}>You answered correctly </Text>
            <Text style={styles.resultTitle}>3/10</Text>
            <TouchableOpacity style={styles.btnLogin}  >
                <Text style={styles.loginBtnTitle} >Take New Quiz</Text>
                <Icon name="arrow-right-circle" size={25} color="#000" style={{marginHorizontal:10}}  />
            </TouchableOpacity>
           

        </SafeAreaView>
    )
}

export default ResultScreen

const styles = ScaledSheet.create({
    container:{
        backgroundColor: '#7A70F9', flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    headerTitle:{
        fontSize: '26@s', color: '#fff', marginVertical: '30@s'
    },
    answerTitle:{
        fontSize: '23@s', color: '#fff', marginVertical: '10@s'
    },
    resultTitle:{
        fontSize: '27@s', color: '#fff', marginVertical: '10@s', fontWeight: 'bold'
    },
    btnLogin: {
        backgroundColor: '#FED71D', borderRadius: '10@s',
        padding: '15@s', margin: '15@s',width:'160@s',flexDirection:'row',
       
    },
    loginBtnTitle: {
        fontSize: '16@s',
        textAlign: 'center',
    },
})