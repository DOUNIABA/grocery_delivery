import React from 'react';
import { View, Text } from 'react-native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

const AuthHeader = (props: any) => {
    return (
        <View style={styles.authHeader}>
            <Text style={styles.textAuthHeader}>{props.name}</Text>
        </View>
    );
}

export default AuthHeader;