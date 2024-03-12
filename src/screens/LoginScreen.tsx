import { Keyboard, Platform, Image, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import React, { FC, useState } from 'react'
import LoginImg from '../images/LoginImg';
import { scale, verticalScale, moderateScale, ScaledSheet, } from 'react-native-size-matters';
import GoogleImg from '../images/GoogleImg';
import { StackParamList } from '../../App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginScreenProps=NativeStackScreenProps<StackParamList, 'Login'>;

const LoginScreen: FC<LoginScreenProps> = ({ navigation}) => {
    const [text, onChangeText] = useState('Useless Text');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <LoginImg width={scale(250)} height={verticalScale(200)} />
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.emailTitle}>Email Address</Text>
                            <TextInput
                                style={styles.inputsubContainer}
                                onChangeText={onChangeText}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.passwordTitle}>Password</Text>
                            <TextInput
                                style={styles.inputsubContainer}
                                onChangeText={onChangeText}
                            />
                        </View>

                        <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 14 }}>
                            <Text style={styles.forgotPasswordTitle}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('Home')} >
                            <Text style={styles.loginBtnTitle} >Login</Text>
                        </TouchableOpacity>

                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Or</Text>

                        <TouchableOpacity  >
                            <View style={styles.btnGoogle}>
                                <GoogleImg width={scale(30)} height={verticalScale(30)} />
                                <Text style={styles.googleTitle} >Continue with Google</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={styles.accountContainer}>

                            <Text style={{ color: '#000', fontSize: scale(15) }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} >
                                <Text style={styles.registerTitle}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default LoginScreen

const styles = ScaledSheet.create({
    container: {
        flex: 1, backgroundColor: '#7A70F9'
    },
    footerContainer: {
        backgroundColor: '#fff',
        borderTopStartRadius: '30@s',
        padding: '20@s',
        borderTopEndRadius: '30@s',
        flex: 2,
    },
    headerContainer: {
        flex: 1, alignItems: 'center'
    },
    inputContainer: {
        marginTop: '10@s'
    },
    inputsubContainer: {
        height: '40@vs',
        margin: '12@s',
        padding: '10@s',
        backgroundColor: '#EFF2F3',
        borderRadius: '10@s'
    },
    btnGoogle: {
        backgroundColor: '#FED71D', borderRadius: '10@s',
        padding: '10@s', margin: '20@s', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    btnLogin: {
        backgroundColor: '#FED71D', borderRadius: '10@s',
        padding: '15@s', margin: '15@s',
    },
    loginBtnTitle: {
        fontSize: '15@s',
        textAlign: 'center'
    },
    emailTitle: {
        marginLeft: '15@s', fontSize: "15@s",
    },
    passwordTitle: {
        marginLeft: '15@s', fontSize: "15@s"
    },
    forgotPasswordTitle: {
        fontSize: "15@s"
    },
    googleTitle: {
        fontSize: '15@s',
        marginLeft: '5@s'
    },
    registerTitle: {
        color: '#FED71D', fontWeight: 'bold', marginHorizontal: '10@s', fontSize: '15@s', textAlign: 'center'
    },
    accountContainer:{
        flexDirection: 'row', justifyContent: 'center',textAlign:'center'
    }



})