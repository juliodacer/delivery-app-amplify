import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottonTabNav from './bottomTabNav';

const Root = createStackNavigator();

const Router = () => {
    return (
       <NavigationContainer>
           <Root.Navigator screenOptions={{headerShown: false}}>
               <Root.Screen component={BottonTabNav} name="HomeTabs"/>
           </Root.Navigator>
       </NavigationContainer>
    )
}

export default Router
