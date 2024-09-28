import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet, } from 'react-native-size-matters';

interface ProgressBarProps {
    currentQuestion:number,
    ques_number:number,
    progress:number
}

const ProgressBar = (props: ProgressBarProps) => {
    const {currentQuestion,ques_number,progress}=props
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:25,marginBottom:10,fontWeight:'bold'}}>Question {currentQuestion} of {ques_number}</Text>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, height: 10 ,marginVertical:10}}>
                <View style={{ backgroundColor: '#FED71D', width:60, height: 10, borderRadius: 5 }}>

                </View>
            </View>
        </View>

    )
}

export default ProgressBar

const styles = ScaledSheet.create({
     
})