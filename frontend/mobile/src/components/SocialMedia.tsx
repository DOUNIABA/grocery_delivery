import React from 'react';
import { View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

const SocialMedia = () => {
    return (
        <View style={styles.loginApi}>
            <View style={styles.loginApiBtn}><Icon name="facebook" size={20} color={colors.color1} ></Icon></View>
            <View style={styles.loginApiBtn}><Icon name="google" size={20} color={colors.color1} ></Icon></View>
        </View>
    );
}

export default SocialMedia;