import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRouter from './router/auth.router';

const Tab = createNativeStackNavigator();

function Index() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
                <Tab.Screen options={{ headerShown: false }} name="Auth" component={AuthRouter} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Index;
