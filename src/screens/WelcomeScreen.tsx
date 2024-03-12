import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';
import { QuestionImgComponent } from '../images/QuestionImgComponent';
import { scale, verticalScale, moderateScale,ScaledSheet } from 'react-native-size-matters';

type WelcomeScreenProps=NativeStackScreenProps<StackParamList, 'Welcome'>;


const WelcomeScreen = ({navigation}:WelcomeScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Let Get Started!</Text>
                <View style={{ alignItems: 'center' }}>
                    <QuestionImgComponent width={500}  />
                </View>
                <View>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontSize:scale(15)}}>Already Have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                            <Text style={styles.btnLogin}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = ScaledSheet.create({
    container: { flex: 1, backgroundColor: '#7A70F9' },
    subContainer: {
        flex: 1, justifyContent: 'space-around'
    },
    title: {
        color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: '30@s'
    },
    btnText: {
        textAlign: 'center', fontWeight: 'bold', fontSize: '20@s'
    },
    btnContainer: {
        backgroundColor: '#FED71D', borderRadius: '10@s', padding: '20@s', margin: '20@s'
    },
    btnLogin:{
        color:'#FED71D',fontWeight:'bold',marginHorizontal:'10@s',fontSize:'15@s'
    },


})