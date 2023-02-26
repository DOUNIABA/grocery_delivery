import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SETSTATE } from '../redux/features/index';

import colors from '../assets/styles/colors';

import ProductRouter from './product.router';
import Store from '../screens/Store';
import Profile from '../screens/Profile';

const AppTab = createBottomTabNavigator();

const AppRouter = () => {
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
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Products') {
                        iconName = focused ? 'store' : 'store';
                    }
                    else if (route.name === 'Store') {
                        iconName = focused ? 'shopping-cart' : 'shopping-cart';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'user-cog' : 'user-cog';
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: colors.color1,
                tabBarInactiveTintColor: colors.black,
                tabBarShowLabel: true,
                tabBarLabelStyle: { paddingBottom: 10, },
                tabBarStyle: { padding: 10, height: 60, },
            })}
        >
            <AppTab.Screen options={{ headerShown: false }} name="Products" component={ProductRouter} />
            <AppTab.Screen options={{ headerShown: false }} name="Store" component={Store} />
            <AppTab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        </AppTab.Navigator>
    );
}

export default AppRouter;