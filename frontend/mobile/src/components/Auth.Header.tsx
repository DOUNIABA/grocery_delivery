import React from 'react';
import { View, Text } from 'react-native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

const AuthHeader = () => {
    return (
        <View style={styles.authHeader}>
            <Text style={styles.textAuthHeader}>Login</Text>
        </View>
    );
}

export default AuthHeader;