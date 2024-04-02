import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type StackParamList = {
    Welcome: undefined,
    Login: undefined,
    SignUp: undefined,
    Home: undefined,
    Question: { category_id: number },
    Category: undefined,
    Result:undefined
}
export type OnboardingScreenProp = NativeStackScreenProps<
    StackParamList,
    'Welcome'
>;

export type LoginScreenProp = NativeStackScreenProps<
    StackParamList,
    'Login'
>;

export type SignUpScreenProp = NativeStackScreenProps<
    StackParamList,
    'SignUp'
>;

export type HomeScreenProp = NativeStackScreenProps<
    StackParamList,
    'Home'
>;
export type QuestionScreenProp = NativeStackScreenProps<
    StackParamList,
    'Question'
>;
export type CategoryScreenProp = NativeStackScreenProps<
    StackParamList,
    'Category'
>;

export type ResultScreenProp = NativeStackScreenProps<
    StackParamList,
    'Result'
>;

 