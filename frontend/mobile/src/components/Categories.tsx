import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import axios from 'axios';

import styles from '../assets/styles/styles';
import colors from '../assets/styles/colors';
const Categories = (props: any) => {
    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        await axios.get(`http://192.168.221.206:5000/api/categorie/get-all-categorie`)
            .then((res) => {
                setCategories(res.data.categories)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 60, margin: 8, flexDirection: 'row', gap: 8, }}>
                <Text style={{ height: 40, color: colors.black, backgroundColor: (props.select === 'All') ? colors.color1 : colors.white, padding: 10, borderRadius: 8 }} onPress={props.onPress}>All</Text>
                {categories.map((categorie, i) => (
                    <Text key={i} style={{ height: 40, color: colors.black, backgroundColor: (props.select === categorie.name) ? colors.color1 : colors.white, padding: 10, borderRadius: 8 }} onPress={props.onPress}>{categorie.name === '' ? 'All' : categorie.name}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

export default Categories;