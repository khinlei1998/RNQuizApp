import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { scale, verticalScale, ScaledSheet, } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/types';
interface CategoriesProps {
    id: number;
    name: string;
    img_name: string;

}
interface CategoryProps {
    category: CategoriesProps[];
}
const CategoryComponent = (props: CategoryProps) => {
    const { category } = props;
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()
    return (

        <View style={styles.categoryContainer}>
            {category.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.subCategoryContainer}
                        onPress={() => navigation.navigate('Question')}
                    >
                        <Icon name={item.img_name} size={scale(30)} color='#fff' />
                        <Text style={styles.categoryTitle}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default CategoryComponent

const styles = ScaledSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', marginVertical: '10@s', marginHorizontal: '10@s'
    },
    subCategoryContainer: { backgroundColor: '#7A70F9', borderRadius: '20@s', width: '45%', alignItems: 'center', padding: '20@s', marginHorizontal: '5@s', justifyContent: 'center', marginBottom: '20@s' },
    categoryTitle: {
        fontSize: '20@s', color: '#fff', marginTop: '10@s'
    }
})