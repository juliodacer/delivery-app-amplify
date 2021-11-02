import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/index';
import CartScreen from '../screens/CartScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeStack from './HomeStack';
import CartStack from './CartStack';

const Tab = createBottomTabNavigator();

const BottonTabNav = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                inactiveTintColor: '#A3F000',
                activeTintColor: '#68B202'
            }}>
            <Tab.Screen
                component={HomeStack}
                name="Home"
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name="home" color={color} size={25} />)
                }}
            />
            <Tab.Screen
                component={HomeScreen}
                name="Offer"
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name="tago" color={color} size={25} />)
                }} />
            <Tab.Screen
                component={CartStack}
                name="Cart"
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name="shoppingcart" color={color} size={25} />)
                }} />
            <Tab.Screen
                component={ProfileScreen}
                name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (<AntDesign name="user" color={color} size={25} />)
                }} />
        </Tab.Navigator>
    )
}

export default BottonTabNav
