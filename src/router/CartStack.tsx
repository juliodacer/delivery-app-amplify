import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={CartScreen}
                name="CartScreen"
                options={{ title: 'Carrito' }} />
            <Stack.Screen
                component={ProfileScreen}
                name="ProfileScreen"
                options={{ title: 'Perfil' }} />
        </Stack.Navigator>
    )
}

export default CartStack
