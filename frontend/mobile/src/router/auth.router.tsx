import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import { SETSTATE } from '../redux/features/index';

import Page from '../screens/Page';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createNativeStackNavigator();

function AuthRouter() {
    const dispatch = useDispatch();
    const Auth = useSelector((state: any) => state.Auth);
    React.useEffect(() => {
        try {
            AsyncStorage.getItem('token').then((token) => {
                AsyncStorage.getItem('user').then((user) => {
                    dispatch(SETSTATE({ token, user }))
                })
            })
        } catch (error) {
            console.log(error)
        }
    }, [Auth])

    return (
        <AuthStack.Navigator initialRouteName="Page">
            <AuthStack.Screen name="Page" options={{ headerShown: false }} component={Page} />
            <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <AuthStack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        </AuthStack.Navigator>
    );
}

export default AuthRouter;