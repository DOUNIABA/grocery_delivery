import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

import AuthHeader from '../components/Auth.Header';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';

import { ApiRegister } from '../services/auth.services';

const Register = () => {
    const navigation = useNavigation();
    const [register, setRegister] = React.useState({ username: '', email: '', password: '', confirm_password: '' });

    return (
        <View style={[styles.auth, { justifyContent: 'space-between' }]}>
            <AuthHeader />
            <View style={styles.authForm}>
                <Input placeholder="Username" type='username' onChangeText={(value: any) => setRegister({ ...register, username: value })} />
                <Input placeholder="Email" type='email' onChangeText={(value: any) => setRegister({ ...register, email: value })} />
                <Input placeholder="Password" type='password' onChangeText={(value: any) => setRegister({ ...register, password: value })} />
                <Input placeholder="Confirm Password" type='password' onChangeText={(value: any) => setRegister({ ...register, confirm_password: value })} />
                <View style={styles.btns}>
                    <Text style={styles.btnsBtn} onPress={() => { ApiRegister(register) }}>Register</Text>
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