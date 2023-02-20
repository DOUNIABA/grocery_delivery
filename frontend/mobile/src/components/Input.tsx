import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

const Input = (props: any) => {
    const icons = [
        { name: 'username', icon: 'account' },
        { name: 'email', icon: 'email' },
        { name: 'password', icon: 'lock' },
    ]

    return (
        <View style={styles.authInput}>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={colors.black}
                secureTextEntry={(props.type === 'password') ? true : false}
                style={{ height: 50, fontSize: 18, }}
            />
            <Icon name={(props.type === 'username') ? 'account' : 'email'} size={25} color={colors.black} ></Icon>
        </View>
    );
}

export default Input;