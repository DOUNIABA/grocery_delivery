import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/styles/colors';
import styles from '../assets/styles/styles';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { REGISTER_SUCCESS, REGISTER_FAIL, SETMESSAGE } from '../redux/features/auth';

import AuthHeader from '../components/Auth.Header';
import Input from '../components/Input';
import SocialMedia from '../components/SocialMedia';

const Register = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [register, setRegister] = React.useState({ username: '', email: '', password: '', confirm_password: '' });
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        dispatch(SETMESSAGE())
    }, [])

    const onSubmit = async () => {
        await axios.post(`http://172.16.10.62:5000/api/auth/register`, register)
            .then((res) => {
                if (!res.data.message) {
                    setMessage(res.data.error)
                } else {
                    setMessage(res.data.message)
                    Alert.alert('Register Success', message)
                    navigation.navigate('Login')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={[styles.auth, { justifyContent: 'space-between' }]}>
            <AuthHeader name="Register" />
            <View style={styles.authForm}>
                <Text style={{ color: colors.black }}>{message}</Text>
                <Input placeholder="Username" type='username' onChangeText={(value: any) => setRegister({ ...register, username: value })} />
                <Input placeholder="Email" type='email' onChangeText={(value: any) => setRegister({ ...register, email: value })} />
                <Input placeholder="Password" type='password' onChangeText={(value: any) => setRegister({ ...register, password: value })} />
                <Input placeholder="Confirm Password" type='password' onChangeText={(value: any) => setRegister({ ...register, confirm_password: value })} />
                <View style={styles.btns}>
                    <Text style={styles.btnsBtn} onPress={onSubmit}>Register</Text>
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