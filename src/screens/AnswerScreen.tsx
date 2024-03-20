import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale, ScaledSheet, } from 'react-native-size-matters';
import RadioButton from '../components/RadioButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/types';
import Icon from 'react-native-vector-icons/Feather';

const AnswerScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

    return (
        <>
            <View style={{ backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 15, marginVertical: 15, padding: 20, borderColor: '#7A70F9', borderWidth: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.answerTitle}>AnswerScreen</Text>
                <RadioButton />
            </View>

            <View style={{ backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 15, marginVertical: 15, padding: 20, borderColor: '#7A70F9', borderWidth: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.answerTitle}>AnswerScreen</Text>
                <RadioButton />
            </View>


            <View style={{ backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 15, marginVertical: 15, padding: 20, borderColor: '#7A70F9', borderWidth: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.answerTitle}>AnswerScreen</Text>
                <RadioButton />
            </View>


            <View style={{ backgroundColor: '#fff', borderRadius: 15, marginHorizontal: 15, marginVertical: 15, padding: 20, borderColor: '#7A70F9', borderWidth: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={styles.answerTitle}>AnswerScreen</Text>
                <RadioButton />
            </View>



            <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Result')}  >
                <Text style={styles.loginBtnTitle} >Next</Text>
                <Icon name="arrow-right-circle" size={25} color="#000" style={{marginHorizontal:10}}  />

            </TouchableOpacity>
        </>
    )
}

export default AnswerScreen

const styles = ScaledSheet.create({
    answerTitle: {
        fontSize: '16@s',
        marginHorizontal: '10@s'
    },
    btnLogin: {
        backgroundColor: '#FED71D', borderRadius: '10@s',
        padding: '15@s', margin: '15@s',flexDirection:'row',justifyContent:'center'
    },
    loginBtnTitle: {
        fontSize: '15@s',
        textAlign: 'center'
    },
})