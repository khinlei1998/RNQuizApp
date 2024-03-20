import { TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { FC } from 'react'
import { ScaledSheet, } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import { categories } from '../utils';
import CategoryComponent from '../components/CategoryComponent';
import { HomeScreenProp } from '../navigation/types';


const HomeScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYnuvAw7_Vgyirya4Od0qjbZjASZKijOh_g&usqp=CAU' }}
                            style={styles.imgSize} />
                    </View>

                    <View style={styles.headerContainer}>

                        <Text style={styles.headerTitle}>Hi ,Yati</Text>

                        <Text style={[styles.headerTitle, styles.headerSubTitle]}>Let's test your knowledge</Text>


                    </View>
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            value='search'
                        />
                    </View>

                </SafeAreaView>
                <View style={styles.bodyContainer}>
                    <Text style={styles.catergoryTitle}>Choose Category</Text>

                    <CategoryComponent category={categories} />

                </View>
            </View>
        </TouchableWithoutFeedback>


    )
}

export default HomeScreen

const styles = ScaledSheet.create({

    container: {
        flex: 1, backgroundColor: '#7A70F9'
    },
    profileContainer: {
        alignItems: 'flex-end', marginRight: '20@s', marginVertical: '10@s'
    },
    imgSize: {
        width: '40@s', height: '40@vs', borderRadius: '30@s',
    },
    headerContainer: {
        padding: '20@s',
    },
    headerTitle: { fontSize: '20@s', color: '#fff', },
    headerSubTitle: {
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5B4DC3',
        borderRadius: '20@s',
        marginHorizontal: '20@s',
        marginBottom: '30@s',
    },
    searchIcon: { padding: 10 },
    searchInput: {
        flex: 1,
        paddingTop: '10@s',
        paddingRight: '10@s',
        paddingBottom: '10@s',
        paddingLeft: 0,
        color: '#fff',
        fontSize: '20@s'
    },
    bodyContainer: {
        flex: 1, backgroundColor: '#FAFAFA', borderTopRightRadius: '30@s', borderTopLeftRadius: '30@s'
    },
    catergoryTitle: {
        fontSize: '20@s', marginVertical: '19@s', marginHorizontal: '18@s'
    }
})