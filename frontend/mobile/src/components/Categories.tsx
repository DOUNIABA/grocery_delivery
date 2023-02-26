import React, { useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';

import styles from '../assets/styles/styles';
import colors from '../assets/styles/colors';
const Categories = (props: any) => {
    const [categories, setCategories] = useState([
        { id: 1, name: '' },
        { id: 1, name: 'Fruits' },
        { id: 1, name: 'Vegetables' },
        { id: 1, name: 'Al-Qatani' },
    ])
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 60, margin: 8, flexDirection: 'row', gap: 8, }}>
                {categories.map((categorie, i) => (
                    <Text key={i} style={{ height: 40, color: colors.black, backgroundColor: (props.select === categorie.name) ? colors.color1 : colors.white, padding: 10, borderRadius: 8 }} onPress={props.onPress}>{categorie.name === '' ? 'All' : categorie.name}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

export default Categories;