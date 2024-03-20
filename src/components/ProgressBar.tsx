import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet, } from 'react-native-size-matters';

interface ProgressBarProps {

}

const ProgressBar = (props: ProgressBarProps) => {
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:25,marginBottom:10,fontWeight:'bold'}}>Question 1 of 10</Text>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, height: 10 ,marginVertical:10}}>
                <View style={{ backgroundColor: '#FED71D', width: 30, height: 10, borderRadius: 5 }}>

                </View>
            </View>
        </View>

    )
}

export default ProgressBar

const styles = ScaledSheet.create({
     
})