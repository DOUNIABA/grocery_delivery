import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

import AuthHeader from '../components/Auth.Header';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';

const Register = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.auth, { justifyContent: 'space-between' }]}>
            <AuthHeader />
            <View style={styles.authForm}>
                <Input placeholder="Username" type='username' />
                <Input placeholder="Email" type='email' />
                <Input placeholder="Password" type='password' />
                <Input placeholder="Confirm Password" type='password' />
                <View style={styles.btns}>
                    <Text style={styles.btnsBtn} onPress={() => navigation.navigate('Register')}>Register</Text>
                    <Text style={styles.btnsLink} onPress={() => navigation.navigate('Login')}>Login</Text>
                </View>
                <View style={styles.authFooter}>
                    <Text style={styles.authFooterLine}></Text>
                    <Text style={styles.authFootertext}>Or</Text>
                    <Text style={styles.authFooterLine}></Text>
                </View>
                <SocialMedia />
            </View>
        </View >
    );
}

export default Register;