import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page from '../screens/Page';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createNativeStackNavigator();

function AuthRouter() {
    return (
        <AuthStack.Navigator initialRouteName="Page">
            <AuthStack.Screen name="Page" options={{ headerShown: false }} component={Page} />
            <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <AuthStack.Screen name="Register" options={{ headerShown: false }} component={Register} />
        </AuthStack.Navigator>
    );
}

export default AuthRouter;