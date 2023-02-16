import React from 'react';
import { View, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../assets/styles/colors';

const Input = (props: any) => {
    const icons = [
        { name: 'username', icon: 'account' },
        { name: 'email', icon: 'email' },
        { name: 'password', icon: 'lock' },
    ]

    return (
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 5, paddingRight: 10, borderBottomColor: colors.black, borderBottomWidth: 8, }}>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={colors.black}
                secureTextEntry={(props.type === 'password') ? true : false}
                style={{ height: 50, fontSize: 18, }}
            />
            {/* <Icon name={(props.type === 'username') ? 'account' : 'email'} size={25} color={colors.black} ></Icon> */}
        </View>
    );
}

export default Input;