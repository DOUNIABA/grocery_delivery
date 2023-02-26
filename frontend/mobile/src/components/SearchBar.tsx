import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

const SearchBar = (props: any) => {

    return (
        <View style={styles.searchBar}>
            <Icon name='search' size={25} color='#FED049'></Icon>
            <TextInput style={styles.searchBarInput} placeholder='Search' placeholderTextColor={colors.gray} onChangeText={props.onChangeText} />
        </View>
    );
}

export default SearchBar;