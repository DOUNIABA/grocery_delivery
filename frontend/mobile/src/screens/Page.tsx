import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

function Page() {
    const navigation = useNavigation();
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 1000)
    }, [])

    if (load)
        return (
            <View style={styles.auth}>
                <View style={styles.header}>
                    <Image source={require('../assets/images/grocery.png')} />
                </View>
                <View>
                    <Text style={styles.authHomeText}>Welcom To</Text>
                    <Text style={styles.authHomeText}>Grocey Delivery</Text>
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={styles.authHomeBtn} onPress={() => navigation.navigate('Login')}>Login</Text>
                    <Text style={styles.authHomeBtn} onPress={() => navigation.navigate('Register')}>Register</Text>
                </View>
            </View>
        )
    else
        return (
            <View style={styles.auth}>
                <ActivityIndicator size="large" color={colors.white} />
            </View>
        )
}

export default Page;