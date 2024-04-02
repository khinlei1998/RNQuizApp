import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';
import RadioButton from '../components/RadioButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParamList} from '../navigation/types';
interface Answer {
  key: string;
  content: string;
}

interface AnswerProps {
  filteredcategory: Answer[];
}

const AnswerScreen = (props: AnswerProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const {filteredcategory} = props;
  return (
    <>
      {filteredcategory.map((answer, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            marginHorizontal: 15,
            marginVertical: 15,
            padding: 20,
            borderColor: '#7A70F9',
            borderWidth: 0.8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.answerTitle}>{answer.content}</Text>
          <RadioButton />
        </View>
      ))}
     
    </>
  );
};

export default AnswerScreen;

const styles = ScaledSheet.create({
  answerTitle: {
    fontSize: '16@s',
    marginHorizontal: '10@s',
  },
  
});
