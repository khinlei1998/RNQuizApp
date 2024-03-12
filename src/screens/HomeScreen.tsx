import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#7A70F9' }}>
            <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYnuvAw7_Vgyirya4Od0qjbZjASZKijOh_g&usqp=CAU' }}
                    style={{ width: 50, height: 50, borderRadius: 30 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:20 }}>
                <View style={{ backgroundColor: '#fff', borderRadius: 20, width: '40%', padding: 20 }}>
                    <Text>jj</Text>
                </View>
                <View style={{ backgroundColor: '#fff', borderRadius: 20, width: '40%', padding: 20 }}>
                    <Text>jj</Text>
                </View>
                <View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})