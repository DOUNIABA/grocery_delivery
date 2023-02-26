import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRouter from './router/auth.router';
import AppRouter from './router/app.router';
import { Provider } from 'react-redux';
import store from './redux/store';

const Tab = createNativeStackNavigator();

function Index() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="App">
                    <Tab.Screen options={{ headerShown: false }} name="Auth" component={AuthRouter} />
                    <Tab.Screen options={{ headerShown: false }} name="App" component={AppRouter} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Index;
