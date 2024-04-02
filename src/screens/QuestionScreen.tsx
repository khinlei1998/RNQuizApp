import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import ProgressBar from '../components/ProgressBar';
import AnswerScreen from './AnswerScreen';
import {ques_data} from '../utils';
import {useState} from 'react';
import {Route} from '@react-navigation/native';
import {QuestionScreenProp} from '../navigation/types';
import Icon from 'react-native-vector-icons/Feather';

const QuestionScreen = (props: QuestionScreenProp) => {
  const {route, navigation} = props;
  const filter_category = ques_data.questions.filter(
    val => val.category_id == route.params.category_id,
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = filter_category[currentQuestion];
  const ques_number=filter_category.length
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <ProgressBar currentQuestion={currentQuestion+1} ques_number={ques_number} />
          </View>
        </SafeAreaView>
        <View style={styles.bodyContainer}>
          <Text style={styles.catergoryTitle}>{question.content}</Text>

          <AnswerScreen filteredcategory={question.answers} />
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => setCurrentQuestion(currentQuestion+1)}>
            <Text style={styles.loginBtnTitle}>Next</Text>
            <Icon
              name="arrow-right-circle"
              size={20}
              color="#000"
              style={{marginHorizontal: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default QuestionScreen;

const styles = ScaledSheet.create({
  btnLogin: {
    backgroundColor: '#FED71D',
    borderRadius: '10@s',
    padding: '15@s',
    margin: '15@s',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginBtnTitle: {
    fontSize: '15@s',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#7A70F9',
  },

  headerContainer: {
    padding: '20@s',
  },
  headerTitle: {fontSize: '20@s', color: '#fff'},
  headerSubTitle: {
    fontWeight: 'bold',
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    borderTopRightRadius: '30@s',
    borderTopLeftRadius: '30@s',
  },
  catergoryTitle: {
    fontSize: '18@s',
    marginTop: '50@s',
    marginHorizontal: '15@s',
    fontWeight: 'bold',
    marginBottom: '20@s',
  },
});
