import React from 'react'
import { View, Text } from 'react-native'
import {Auth} from 'aws-amplify'
import Button from '../../components/Button'

const MenuScreen = () => {
   const onLogout = () => {
       Auth.signOut();
   }
   return(
       <View>
           <Button text="Cerrar Sesión" onPress={onLogout} />
       </View>
   )
}

export default MenuScreen
