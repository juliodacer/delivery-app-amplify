import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen'; 
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 10,
          marginBottom: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Inicio'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductDetailScreen} name="ProductDetailScreen" options={{title: 'Detalle del Producto'}}/>
    </Stack.Navigator>
  );
};

export default HomeStack;