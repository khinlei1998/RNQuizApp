import {
  Keyboard,
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {FC, useState} from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';
import LoginImg from '../images/LoginImg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../navigation/types';
interface SignUpScreenProps {
  handleRegister: () => void;
}
interface SignUpForm {
  username: string;
  email: string;
  password: string;
}

const SignUpScreen = (props: SignUpScreenProps) => {
  const [formData, setFormData] = useState<SignUpForm>({
    username: '',
    email: '',
    password: '',
  });

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const handleRegister = async () => {
    navigation.navigate('Home')
    // if (formData.email && formData.password) {
    //   if (formData.password.length >= 6) {
        
    //   }
    // }
  };

  const handleChange = (key: keyof SignUpForm, value: string) => {
    setFormData({...formData, [key]: value});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'red',
          flexGrow: 1,
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <LoginImg width={scale(250)} height={verticalScale(200)} />
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.emailTitle}>Full Name</Text>
                <TextInput
                  style={styles.inputsubContainer}
                  onChangeText={text => handleChange('username', text)}
                  value={formData.username}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.emailTitle}>Email Address</Text>
                <TextInput
                  style={styles.inputsubContainer}
                  onChangeText={text => handleChange('email', text)}
                  value={formData.email}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.passwordTitle}>Password</Text>
                <TextInput
                  style={styles.inputsubContainer}
                  onChangeText={text => handleChange('password', text)}
                  value={formData.password}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => handleRegister()}>
                <Text style={styles.loginBtnTitle}>Sign Up</Text>
              </TouchableOpacity>

              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginTop: 10,
                }}>
                Or
              </Text>

              <View style={styles.accountContainer}>
                <Text style={{color: '#000', fontSize: scale(15)}}>
                  Already Have an account?
                </Text>
                <TouchableOpacity>
                  <Text style={styles.registerTitle}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A70F9',
  },
  footerContainer: {
    backgroundColor: '#fff',
    borderTopStartRadius: '30@s',
    padding: '20@s',
    borderTopEndRadius: '30@s',
    flex: 2,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: '10@s',
  },
  inputsubContainer: {
    height: '40@vs',
    margin: '12@s',
    padding: '10@s',
    backgroundColor: '#EFF2F3',
    borderRadius: '10@s',
  },
  btnGoogle: {
    backgroundColor: '#FED71D',
    borderRadius: '10@s',
    padding: '10@s',
    margin: '20@s',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    backgroundColor: '#FED71D',
    borderRadius: '10@s',
    padding: '15@s',
    margin: '15@s',
  },
  loginBtnTitle: {
    fontSize: '15@s',
    textAlign: 'center',
  },
  emailTitle: {
    marginLeft: '15@s',
    fontSize: '15@s',
  },
  passwordTitle: {
    marginLeft: '15@s',
    fontSize: '15@s',
  },
  forgotPasswordTitle: {
    fontSize: '15@s',
  },
  googleTitle: {
    fontSize: '15@s',
    marginLeft: '5@s',
  },
  registerTitle: {
    color: '#FED71D',
    fontWeight: 'bold',
    marginHorizontal: '10@s',
    fontSize: '16@s',
    textAlign: 'center',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '14@s',
    alignItems: 'center',
  },
});
