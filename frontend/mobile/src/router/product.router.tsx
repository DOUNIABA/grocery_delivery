import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from '../screens/Products';
import Product from '../screens/Product';

const ProductStack = createNativeStackNavigator();

const ProductRouter = () => {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="Products" options={{ headerShown: false }} component={Products} />
            <ProductStack.Screen name="Product" options={{ headerShown: false }} component={Product} />
        </ProductStack.Navigator>
    );
}

export default ProductRouter;