import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
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
  filteredcategory: Answer[],
  checkAnswer: (answer: string) => void;
  selectedItem:string
}

const AnswerScreen = (props: AnswerProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const {filteredcategory, checkAnswer,selectedItem} = props;

  return (
    <>
      {filteredcategory.map((answer, index) => (
        <TouchableOpacity
          onPress={() => checkAnswer(answer.key)}
          key={index}
          style={{
            backgroundColor:
              answer.key === selectedItem
                ? '#7A70F9'
                : '#fff', //#fff , 7A70F9,
            // backgroundColor:'#fff',
            borderRadius: 15,
            marginHorizontal: 15,
            marginVertical: 15,
            padding: 20,
            borderColor:'#7A70F9',
            borderWidth: 0.8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: scale(16),
              marginHorizontal: scale(10),
              color:
                answer.key === selectedItem ? '#fff' : '#000',
            }}>
            {answer.content}
          </Text>
          {/* <RadioButton /> */}
        </TouchableOpacity>
      ))}
    </>
  );
};

export default AnswerScreen;

const styles = ScaledSheet.create({
  answerTitle: {
    fontSize: '16@s',
    marginHorizontal: '10@s',
    color: '#fff',
  },
});
